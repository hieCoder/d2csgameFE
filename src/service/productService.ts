// src/services/productService.ts

import { apiClient } from "@/lib/apiClient"; // Import API client đã tạo
import { ApiResponse } from "@/types/api/ApiResponse"; // Import ApiResponse chung
import { ListProduct, ProductItem } from "@/types/product"; // Import các kiểu dữ liệu sản phẩm

/**
 * Hàm để fetch danh sách sản phẩm.
 * Trả về một ApiResponse chứa ListProduct.
 */
export const fetchProducts = async (page: number, size: number): Promise<ApiResponse<ListProduct>> => {
    const endpoint = `product?page=${page}&size=${size}&sort=name`; // Thêm các tham số vào URL
    return await apiClient<ListProduct>(endpoint, {
        method: "GET",
    });
};

/**
 * Hàm để fetch sản phẩm theo ID.
 * Trả về một ApiResponse chứa ProductItem.
 */
export const fetchProductById = async (id: string): Promise<ApiResponse<ProductItem>> => {
    const endpoint = `/product/${id}`; // Đường dẫn endpoint sản phẩm theo ID
    return await apiClient<ProductItem>(endpoint, {
        // Sửa ở đây
        method: "GET",
    });
};
