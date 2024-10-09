import { configureStore } from "@reduxjs/toolkit"; // Import hàm để cấu hình store từ redux Toolkit

export const store = configureStore({
    reducer: {
        
    }
})

// Định nghĩa kiểu cho RootState và AppDispatch để sử dụng trong toàn bộ ứng dụng
export type RootState = ReturnType<typeof store.getState>; // Lấy kiểu của state toàn bộ store
export type AppDispatch = typeof store.dispatch; // Lấy kiểu của dispatch