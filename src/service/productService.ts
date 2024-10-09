// src/services/productService.ts

import { apiClient } from "../lib/apiClient"; // Import API client đã tạo
import { ApiResponse } from "../types/api/ApiResponse"; // Import ApiResponse chung
import { ListProduct, ProductItem } from "../types/product"; // Import các kiểu dữ liệu sản phẩm

// Lấy URL cơ sở của API từ biến môi trường
const BASE_URL =
    process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.example.com";

/**
 * Hàm để fetch danh sách sản phẩm.
 * Trả về một ApiResponse chứa ProductData.
 */
export const fetchProducts = async (
    page: number,
    size: number
): Promise<ApiResponse<ListProduct>> => {
    const url = `${BASE_URL}/products?page=${page}&size=${size}`; // Đường dẫn endpoint sản phẩm với tham số phân trang
    return await apiClient<ApiResponse<ListProduct>>(url); // Gọi API và trả về phản hồi
};

/**
 * Hàm để fetch sản phẩm theo ID.
 * Trả về một ApiResponse chứa ProductItem.
 */
export const fetchProductById = async (
    id: string
): Promise<ApiResponse<ProductItem>> => {
    const url = `${BASE_URL}/products/${id}`; // Đường dẫn endpoint sản phẩm theo ID
    return await apiClient<ApiResponse<ProductItem>>(url); // Gọi API và trả về phản hồi
};
