import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"; // Import các hàm cần thiết từ Redux Toolkit
import { ApiResponse } from "@/types/api/ApiResponse"; // Import ApiResponse chung
import { ListProduct, ProductItem } from "@/types/product"; // Import các kiểu data product
import { fetchProducts, fetchProductById } from "@/service/productService";

// Định nghĩa kiểu dữ liệu cho trạng thái của slice
interface ProductState {
    products: ProductItem[]; // Danh sách sản phẩm
    currentProduct: ProductItem | null; // Sản phẩm hiện tại (cho trang chi tiết)
    loading: boolean; // Trạng thái tải dữ liệu
    error: string | null; // Thông báo lỗi
    pagination: {
        page: number;
        size: number;
        total: number;
        hasNext: boolean;
        hasPrevious: boolean;
    }
}

// Trạng thái khởi tạo cho slice
const initialState: ProductState = {
    products: [], // Bắt đầu với danh sách sản phẩm rỗng
    currentProduct: null,
    loading: false,
    error: null,
    pagination: {
        page: 0,
        size: 10,
        total: 0,
        hasNext: false,
        hasPrevious: false,
    },
};

/**
 * Async thunk để load danh sách sản phẩm.
 * Sử dụng createAsyncThunk để xử lý các hành động bất đồng bộ.
 */
export const loadProducts = createAsyncThunk(
    "products/loadProducts", // Tên action
    async ({ page, size }: { page: number; size: number }) => {
        // Gọi service để fetch sản phẩm
        const response: ApiResponse<ListProduct> = await fetchProducts(page, size);
        return response.data.items; // Trả về mảng sản phẩm
    }
);

/**
 * Async thunk để load sản phẩm theo ID.
 */
export const loadProductById = createAsyncThunk(
    "products/loadProductById", // Tên action
    async (id: string) => {
        // Gọi service để fetch sản phẩm theo ID
        const response: ApiResponse<ProductItem> = await fetchProductById(id);
        return response.data; // Trả về sản phẩm
    }
);

const productSlice = createSlice({
    name: "products", // Tên slice
    initialState, // Trạng thái khởi tạo
    reducers: {
        // Thêm các reducers đồng bộ ở đây nếu cần
    },
    extraReducers: (builder) => {
        // Xử lý các trường hợp cho loadProducts
        builder.addCase(loadProducts.pending, (state) => {
            state.loading = true; // Bắt đầu tải dữ liệu
            state.error = null; // Xóa thông báo lỗi trước đó
        });
        builder.addCase(
            loadProducts.fulfilled,
            (state, action: PayloadAction<ProductItem[]>) => {
                state.loading = false; // Kết thúc tải dữ liệu
                state.products = action.payload; // Cập nhật danh sách sản phẩm
            }
        );
        builder.addCase(loadProducts.rejected, (state, action) => {
            state.loading = false; // Kết thúc tải dữ liệu
            state.error = action.error.message || "Failed to load products"; // Cập nhật thông báo lỗi
        });

        // Xử lý các trường hợp cho loadProductById
        builder.addCase(loadProductById.pending, (state) => {
            state.loading = true; // Bắt đầu tải dữ liệu
            state.error = null; // Xóa thông báo lỗi trước đó
        });
        builder.addCase(
            loadProductById.fulfilled,
            (state, action: PayloadAction<ProductItem>) => {
                state.loading = false; // Kết thúc tải dữ liệu
                state.currentProduct = action.payload; // Cập nhật sản phẩm hiện tại
            }
        );
        builder.addCase(loadProductById.rejected, (state, action) => {
            state.loading = false; // Kết thúc tải dữ liệu
            state.error = action.error.message || "Failed to load product"; // Cập nhật thông báo lỗi
        });
    },
});

// Export reducer để sử dụng trong store
export default productSlice.reducer;
