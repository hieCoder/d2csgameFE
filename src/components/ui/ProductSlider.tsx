// "use client";

// import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
// import { Button } from "@/components/ui/button";

// // Import the slick-carousel styles
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Link from "next/link";

// // Nút điều hướng tới sản phẩm tiếp theo
// function SampleNextArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={`${className} before:content-[''] z-10`}
//             style={{ ...style, display: "block" }}
//             onClick={onClick}
//         >
//             <ChevronRight className="w-6 h-6 text-primary" />
//         </div>
//     );
// }

// // Nút điều hướng tới sản phẩm trước đó
// function SamplePrevArrow(props) {
//     const { className, style, onClick } = props;
//     return (
//         <div
//             className={`${className} before:content-[''] z-10`}
//             style={{ ...style, display: "block" }}
//             onClick={onClick}
//         >
//             <ChevronLeft className="w-6 h-6 text-primary" />
//         </div>
//     );
// }

// // Component chính cho carousel sản phẩm
// export default function ProductSlider() {
//     const [products, setProducts] = useState([]);

//     // Tạo dữ liệu ngẫu nhiên sau khi client đã render
//     useEffect(() => {
//         const generatedProducts = Array(9)
//             .fill(null)
//             .map((_, i) => ({
//                 id: i + 1,
//                 name: `Product ${i + 1}`,
//                 price: Math.floor(Math.random() * 500) + 20,
//                 image: "/images/game.png",
//             }));
//         setProducts(generatedProducts);
//     }, []);

//     const settings = {
//         dots: true,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 7, // Hiển thị 7 sản phẩm trên màn hình lớn
//         slidesToScroll: 1,
//         nextArrow: <SampleNextArrow />,
//         prevArrow: <SamplePrevArrow />,
//         responsive: [
//             {
//                 breakpoint: 1440, // Màn hình lớn hơn 1440px
//                 settings: {
//                     slidesToShow: 7,
//                     slidesToScroll: 1,
//                 },
//             },
//             {
//                 breakpoint: 1024, // Màn hình lớn vừa
//                 settings: {
//                     slidesToShow: 4,
//                     slidesToScroll: 1,
//                 },
//             },
//             {
//                 breakpoint: 768, // Màn hình tablet
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 1,
//                 },
//             },
//             {
//                 breakpoint: 480, // Màn hình nhỏ
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1,
//                 },
//             },
//         ],
//     };

//     return (
//         <div className="container mx-auto px-12 lg:px-24 py-8">
//             {" "}
//             {/* Thêm khoảng cách với viền */}
//             <h2 className="text-2xl font-bold mb-6 text-center"> 
//                 Featured Products
//             </h2>
//             <div className="text-right mb-4">
//                 <Link href="#" className="bg-blue-500 text-white text-sm px-2 py-2 rounded-lg border border-gray-400 hover:bg-white hover:text-blue-500 transition duration-500 ease-in-out">Vừa cập nhập &gt;</Link>
//             </div>
//             {products.length > 0 && (
//                 <Slider {...settings}>
//                     {products.map((product) => (
//                         <div key={product.id} className="px-2">
//                             <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
//                                 <Image
//                                     src={product.image}
//                                     alt={product.name}
//                                     width={120} // Giữ kích thước hình ảnh
//                                     height={120} // Giữ kích thước hình ảnh
//                                     className="w-full h-36 object-cover"
//                                 />
//                                 <div className="p-3">
//                                     <h3 className="font-semibold text-md mb-1">
//                                         {product.name}
//                                     </h3>
//                                     <p className="text-gray-600 mb-3 text-sm">
//                                         ${product.price.toFixed(2)}
//                                     </p>
//                                     <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md">
//                                         <ShoppingCart className="mr-2 h-4 w-4" />{" "}
//                                         Add to Cart
//                                     </Button>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </Slider>
//             )}
//         </div>
//     );
// }
