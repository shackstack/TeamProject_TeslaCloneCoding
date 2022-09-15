import {createSlice} from "@reduxjs/toolkit";
import instance from "../../shared/Requests";
import {createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    error: null,
    products: null,
}

export const getProductsThunk = createAsyncThunk("products/getProducts", async (categoryName, thunk) => {
    try {
        const {data} = await instance.get("/product/category", {
            params: {
                name: categoryName
            }
        });
        if (!data.error) {
            return thunk.fulfillWithValue(data.data);
        }
        return thunk.rejectWithValue(data.error);
    } catch (error) {
        return thunk.rejectWithValue(error);
    }
});

export const getSomeProductsThunk = createAsyncThunk("products/getSomeProducts", async (productNames, thunk) => {
    try {
        let dataArray = [];
        for (const productName of productNames) {
            const {data} = await instance.get("/product", {
                params: {
                    name: productName
                }
            });
            dataArray.push(data.data);
        }
        return thunk.fulfillWithValue(dataArray);
    } catch (error) {
        return thunk.rejectWithValue(error);
    }
})

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getProductsThunk.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
            state.data = null;
        }).addCase(getProductsThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        }).addCase(getProductsThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })

        builder.addCase(getSomeProductsThunk.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
            state.data = null;
        }).addCase(getSomeProductsThunk.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        }).addCase(getSomeProductsThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})

export default productSlice.reducer;