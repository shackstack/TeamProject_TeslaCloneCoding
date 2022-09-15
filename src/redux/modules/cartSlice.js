import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import instance from "../../shared/Requests";

const initialState = {
    isLoading: false,
    error: null,
    cart: [],
}

export const getCartThunk = createAsyncThunk("cart/getCart", async (data, thunk) => {
    try {
        const {data} = await instance.get("/cart");
        if (!data.error) {
            return thunk.fulfillWithValue(data.data);
        }
        return thunk.rejectWithValue(data.error);
    } catch (error) {
        return thunk.rejectWithValue(error);
    }
})

export const addToCartThunk = createAsyncThunk("cart/addToCart", async (item, thunk) => {
    try {
        return thunk.fulfillWithValue(item);
    } catch (error) {
        return thunk.rejectWithValue(error);
    }
})

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getCartThunk.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
            state.cart = null;
        }).addCase(getCartThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.cart = action.payload;
        }).addCase(getCartThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })

        builder.addCase(addToCartThunk.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
            state.cart = null;
        }).addCase(addToCartThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            const localCart = localStorage.getItem("cart");
            if (!localCart) {
                const {productName, quantity, maxQuantity} = action.payload;
                const newCart = [{
                    productName,
                    quantity,
                    maxQuantity
                }];
                localStorage.setItem("cart", JSON.stringify(newCart));
            } else {
                const previousCart = JSON.parse(localCart);
                const newItem = action.payload;
                const newCart = [...previousCart, newItem];
                let quantityObject = {};
                for (const cartItem of newCart) {
                    if (!quantityObject[cartItem.productName]) {
                        quantityObject[cartItem.productName] = 0;
                    }
                    quantityObject[cartItem.productName] += cartItem.quantity;
                }
                const productNames = Object.keys(quantityObject);
                for (const productName of productNames) {
                    const foundItem = newCart.find(cartItem => {
                        return cartItem.productName === productName;
                    });
                    const foundMaxQuantity = foundItem.maxQuantity;
                    console.dir(foundItem);
                    quantityObject[productName] = Math.min(foundMaxQuantity, quantityObject[productName]);
                }
                const finalCart = productNames.map(productName => {
                    const foundItem = newCart.find(cartItem => {
                        return cartItem.productName === productName;
                    });
                    const foundMaxQuantity = foundItem.maxQuantity;
                    return {
                        productName,
                        quantity: quantityObject[productName],
                        maxQuantity: foundMaxQuantity
                    };
                })
                localStorage.setItem("cart", JSON.stringify(finalCart));
            }
        }).addCase(addToCartThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export default cartSlice.reducer;