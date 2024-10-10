// src/lib/apiClient.ts
import { ApiResponse } from "@/types/api/ApiResponse";
/**
 * API client để gọi các endpoint sử dụng fetch.
 * Sử dụng generics <T> để định nghĩa kiểu dữ liệu trả về.
 */
export const apiClient = async <T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> => {
    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

    try {
        // Lấy token từ localStorage (nếu có)
        // const token = localStorage.getItem("token"); // Hoặc từ state quản lý người dùng
        console.log(`${BASE_URL}${endpoint}`);
        
        // Thực hiện gọi API
        const response = await fetch(`${BASE_URL}${endpoint}`, {
            ...options,
            headers: {
                "Content-Type": "application/json", // Định dạng dữ liệu gửi đi
                // ...(token ? { Authorization: `Bearer ${token}` } : {}), // Thêm token nếu có
                ...options.headers, // Các headers khác nếu có
            },
        });

        // Kiểm tra phản hồi thành công
        if (!response.ok) {
            // Nếu phản hồi không thành công, cố gắng lấy thông báo lỗi từ phản hồi
            const errorData = await response.json();
            throw new Error(errorData.message || "API Error");
        }

        // Nếu không có nội dung trả về (204 No Content)
        if (response.status === 204) {
            return {
                status: response.status,
                message: "No Content",
                data: {} as T,
            };
        }

        // Chuyển đổi phản hồi JSON thành kiểu dữ liệu T
        const data: T = await response.json();
        return {
            status: response.status,
            message: "Success",
            data,
        };
    } catch (error: any) {
        // Xử lý lỗi mạng hoặc lỗi không mong muốn
        throw new Error(error.message || "Network Error");
    }
};
