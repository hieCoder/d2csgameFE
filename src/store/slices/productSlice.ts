// src/store/slices/productSlice.ts

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts as fetchProductsService } from "@/service/productService";
import { ApiResponse } from "@/types/api/ApiResponse";
import { ListProduct, ProductItem, PaginationRequest, PaginationResponse } from "@/types/product";

interface ProductState {
    items: ProductItem[];
    page: number;
    size: number;
    total: number;
    hasNext: boolean;
    hasPrevious: boolean;
    status: "idle" | "loading" | "succeeded" | "failed";
    error: string | null;
}

const initialState: ProductState = {
    items: [],
    page: 0,
    size: 10,
    total: 0,
    hasNext: false,
    hasPrevious: false,
    status: "idle",
    error: null,
};

/**
 * Async thunk để load danh sách sản phẩm.
 * Sử dụng createAsyncThunk để xử lý các hành động bất đồng bộ.
 */
export const fetchProducts = createAsyncThunk<
    PaginationResponse<ProductItem>,
    PaginationRequest, // Kiểu tham số truyền vào
    { rejectValue: string }
>("product/fetchProducts", async (pagination: PaginationRequest, { rejectWithValue }) => {
    try {
        const response: ApiResponse<ListProduct> = await fetchProductsService(pagination.page, pagination.size);
        
        // Truy cập trực tiếp vào thuộc tính của ListProduct
        const { page, size, total, items, hasNext, hasPrevious } = response.data.data; // Không cần thêm .data
        return { page, size, total, items, hasNext, hasPrevious }; // Trả về PaginationResponse<ProductItem>
    } catch (error: any) {
        return rejectWithValue(error.message);
    }
});

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        // Bạn có thể thêm các reducers khác nếu cần
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.items = action.payload.items;
                state.page = action.payload.page;
                state.size = action.payload.size;
                state.total = action.payload.total;
                state.hasNext = action.payload.hasNext;
                state.hasPrevious = action.payload.hasPrevious;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.payload || action.error.message || "Something went wrong";
            });
    },
});

// Export reducer để sử dụng trong store
export default productSlice.reducer;
