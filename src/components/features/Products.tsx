"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "@/store/slices/productSlice";
import { RootState } from "@/store/store";
import ErrorModal from "../ui/ErrorModalProps";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PaginationRequest, ProductItem } from "@/types/product";
import ProductCard from "./ProductCard";

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
const ProductList: React.FC = () => {
    const dispatch = useDispatch();
    const { items, status, error, page, size, hasNext, hasPrevious } = useSelector((state: RootState) => state.product);

    const showError = !!error;

    useEffect(() => {
        const paginationRequest: PaginationRequest = { page, size, sort: ["name"] };
        dispatch(fetchProducts(paginationRequest) as any);
    }, [dispatch, page, size]);

    const handlePreviousPage = () => {
        if (hasPrevious) {
            dispatch(fetchProducts({ page: page - 1, size, sort: ["name"] }) as any); // Gọi API với page giảm
        }
    };

    const handleNextPage = () => {
        if (hasNext) {
            dispatch(fetchProducts({ page: page + 1, size, sort: ["name"] }) as any); // Gọi API với page tăng
        }
    };

    return (
        <div className="container mx-auto px-20 py-8">
            {showError && <ErrorModal message={error || "Unknown error"} onClose={() => dispatch({ type: "CLEAR_ERROR" })} />}
            <h2 className="text-2xl font-bold mb-6 text-center">Product List</h2>

            <div className="flex justify-center gap-4">
                {/* Khung bên trái (Top Picks) */}
                <div className="hidden lg:block w-3/10 max-w-[30%] p-4 bg-gray-50 rounded-lg">
                    <h3 className="text-lg font-bold mb-4">Top Picks</h3>
                    <div className="space-y-4"></div>
                </div>

                {/* Khung bên phải (Danh sách sản phẩm) */}
                <div className="w-full lg:w-7/10 p-4 bg-gray-100 rounded-lg">
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {items.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-between mt-4">
                        <Button onClick={handlePreviousPage} disabled={!hasPrevious} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                            Previous
                        </Button>
                        <Button onClick={handleNextPage} disabled={!hasNext} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
