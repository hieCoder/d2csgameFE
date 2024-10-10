import { configureStore } from "@reduxjs/toolkit"; 
import productReducer from "./slices/productSlice"; // Đảm bảo đường dẫn đúng

export const store = configureStore({
    reducer: {
        product: productReducer, // Thêm reducer vào store
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
