"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "@/store/productSlice";
import { RootState, AppDispatch } from "@/store/store";
import ProductCard from "./ProductCard";
import ErrorModal from "../ui/ErrorModalProps";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductItem } from "@/types/product";

/*
        {sideProducts.map((product, index) => (
                            <div
                                key={product.id}
                                className="relative bg-white rounded-lg shadow-lg overflow-hidden flex flex-row items-center"
                            >
                                
                                {index < 4 && (
                                    <div className="absolute top-0 right-0 p-2">
                                        <Image
                                            src="/best-seller.svg"
                                            alt="Best Seller"
                                            width={40}
                                            height={40}
                                            className="w-10 h-10"
                                        />
                                    </div>
                                )}
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={100}
                                    height={100}
                                    className="w-32 h-32 object-cover"
                                />
                                <div className="p-3 flex-grow">
                                    <h3 className="font-semibold text-md mb-1">
                                        {product.name}
                                    </h3>
                                    <p className="text-gray-600 mb-3 text-sm">
                                        ${product.price.toFixed(2)}
                                    </p>
                                    <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md">
                                        <ShoppingCart className="mr-2 h-4 w-4" />{" "}
                                        Add to Cart
                                    </Button>
                                </div>
                            </div>
                        ))}
*/

// Component hiển thị danh sách sản phẩm
export default function ProductList() {
    const dispatch = useDispatch<AppDispatch>(); // Hook để dispatch actions
    const { products, loading, error, paginaton } = useSelector(
        (state: RootState) => state.products
    ); // Hook để chọn state từ store
    const [showError, setShowError] = useState(false); // State để quản lý việc hiển thị modal lỗi

    const [currentPage, setCurrentPage] = useState<number>(0);
    const pageSize = paginaion.size;
    /**
     * useEffect để load danh sách sản phẩm khi component được mount.
     */
    useEffect(() => {
        dispatch(loadProducts({page})); // Dispatch action để load sản phẩm
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            setShowError(true); // Hiển thị modal lỗi
        }
    }, [error]);

    const handleCloseError = () => setShowError(false);

    // Hiển thị thông báo khi đang tải dữ liệu
    if (loading) return <p className="text-center mt-4">Loading Products...</p>;

    return (
        <div className="container mx-auto px-20 py-8">
            {showError && (
                <ErrorModal
                    message={error || "Uknown error"}
                    onClose={handleCloseError}
                />
            )}
            <h2 className="text-2xl font-bold mb-6 text-center">
                Product List
            </h2>

            {/* Layout chia 2 khung với tỷ lệ 7:3 */}
            <div className="flex justify-center gap-4">
                {/* Khung bên trái (chiếm 30%, ẩn trên màn hình nhỏ hơn 1024px) */}
                <div className="hidden lg:block w-3/10 max-w-[30%] p-4 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-bold mb-4">Top Picks</h3>
                    <div className="space-y-4"></div>
                </div>

                {/* Khung bên phải (chiếm 70%) */}
                <div className="w-full lg:w-7/10 p-4 bg-gray-100 rounded-lg">
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {products.map((product: ProductItem) => (
                            // Sử dụng component ProductCard để hiển thị từng sản phẩm
                            <ProductCard key={product.id} product={product} />
                        ))}
                        {/* {currentProducts.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
                            >
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={150}
                                    height={150}
                                    className="w-full h-32 object-cover"
                                />
                                <div className="p-2 flex-grow">
                                    <h3 className="font-semibold text-md mb-1">
                                        {product.name}
                                    </h3>
                                    <p className="text-gray-600 mb-3 text-sm">
                                        ${product.price.toFixed(2)}
                                    </p>
                                    <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md">
                                        <ShoppingCart className="mr-2 h-4 w-4" />{" "}
                                        Add to Cart
                                    </Button>
                                </div>
                            </div>
                        ))} */}
                    </div>
                </div>
            </div>
        </div>
    );
}
