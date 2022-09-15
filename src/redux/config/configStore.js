import {configureStore} from "@reduxjs/toolkit";
import productSliceReducer from "../modules/productSlice";
import individualProductSliceReducer from "../modules/individualProductSlice"
import cartSliceReducer from "../modules/cartSlice";
import {createLogger} from "redux-logger";

const logger = createLogger({});

const store = configureStore({
    reducer: {
        productSliceReducer,
        individualProductSliceReducer,
        cartSliceReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export default store;
