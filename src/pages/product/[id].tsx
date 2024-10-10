import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "@/store/slices/productSlice";
import { RootState, AppDispatch } from "@/store/store";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/features/Header";
import FooterIcon from "@/components/features/FooterIcon";

const ProductDetail = () => {
    const [mainImage, setMainImage] = useState("/golden-nirvana.jpg");

    const thumbnails = [
        "/golden-nirvana.jpg",
        "/thumbnail1.jpg",
        "/thumbnail2.jpg",
        "/thumbnail3.jpg",
        "/thumbnail4.jpg",
        "/thumbnail5.jpg",
    ];

    const relatedProducts = [
        { name: "Arcana Rubick", price: 19.0 },
        { name: "Manifold Paradox", price: 19.0 },
        { name: "Bladeform Legacy", price: 19.0 },
        { name: "Fractal Horns of Inner Abysm", price: 19.0 },
        { name: "Demon Eater", price: 19.0 },
        { name: "Exalted Frost Avalanche", price: 19.0 },
        { name: "Exalted Manifold Paradox", price: 19.0 },
    ];

    const similarItems = [
        { name: "Blaze Armor", price: 9.0 },
        { name: "Frost Avalanche", price: 9.0 },
        { name: "Fiery Soul of the Slayer", price: 19.0 },
        { name: "Swine of the Sunken Galley", price: 19.0 },
        { name: "Tempest Helm of the Thundergod", price: 19.0 },
        { name: "Demon Eater", price: 9.0 },
        { name: "Fractal Horns of Inner Abysm", price: 9.0 },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <Header></Header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <Image
                        src={mainImage}
                        alt="Golden Nirvana"
                        width={500}
                        height={500}
                        className="w-full rounded-lg mb-4"
                    />
                    <div className="grid grid-cols-6 gap-2">
                        {thumbnails.map((thumb, index) => (
                            <Image
                                key={index}
                                src={thumb}
                                alt={`Thumbnail ${index + 1}`}
                                width={80}
                                height={80}
                                className="w-full rounded cursor-pointer"
                                onClick={() => setMainImage(thumb)}
                            />
                        ))}
                    </div>
                    <div className="mt-4">
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="Golden Nirvana Preview"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                <div>
                    <h1 className="text-3xl font-bold mb-4">GOLDEN NIRVANA</h1>
                    <p className="text-2xl font-semibold mb-4">₫ 19.000</p>
                    <Button className="w-1/3 py-6 mb-4 bg-green-600 hover:bg-white hover:text-black transition ease-in-out duration-500 hover:border">Thêm vào giỏ hàng</Button>
                    <p className="text-gray-600 mb-4">
                        Còn hàng - Giao hàng: 24h trong TP.HCM
                    </p>
                    <div className="prose max-w-none">
                        <p>
                            Golden Nirvana is một trong những bộ set tương của
                            Phoenix.
                        </p>
                        <p>
                            Set có thiết kế và hưởng ứng đẹp mắt với các chi
                            tiết chạm khắc tinh xảo và đặc biệt hiệu ứng lửa đặc
                            trưng của Phoenix.
                        </p>
                        <p>
                            Phần đuôi dài và mượt mà giống là một trong những
                            điểm đặc biệt của set Golden Nirvana này.
                        </p>
                        <p>
                            Set được đánh giá cao nhất trong các set của Phoenix
                            hiện tại.
                        </p>
                    </div>
                    <div className="flex gap-2 mt-4">
                        <Button variant="outline">Facebook</Button>
                        <Button variant="outline">Share</Button>
                    </div>
                </div>
            </div>

            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">
                    Các sản phẩm tương tự
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                    {relatedProducts.map((product, index) => (
                        <Card key={index}>
                            <CardContent className="p-4">
                                <Image
                                    src={`/placeholder.svg?height=100&width=100`}
                                    alt={product.name}
                                    width={100}
                                    height={100}
                                    className="w-full mb-2"
                                />
                                <h3 className="font-semibold">
                                    {product.name}
                                </h3>
                                <p>₫ {product.price.toFixed(3)}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Có thể bạn sẽ thích</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                    {similarItems.map((item, index) => (
                        <Card key={index}>
                            <CardContent className="p-4">
                                <Image
                                    src={`/placeholder.svg?height=100&width=100`}
                                    alt={item.name}
                                    width={100}
                                    height={100}
                                    className="w-full mb-2"
                                />
                                <h3 className="font-semibold">{item.name}</h3>
                                <p>₫ {item.price.toFixed(3)}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <FooterIcon></FooterIcon>

            <footer className="mt-4 text-center text-sm text-gray-600">
                <p>© Copyright 2018. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default ProductDetail;
