import Image from "next/image";
import Header from "@/components/features/Header";
import FooterIcon from "@/components/features/FooterIcon";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Trash2,
    Minus,
    Plus,
    Shield,
    CheckCircle,
    Package,
} from "lucide-react";

export default function ShoppingCart() {
    const cartItems = [
        {
            id: 1,
            name: "Boilerplate Bruiser",
            price: 30000,
            image: "/placeholder.svg",
            quantity: 1,
        },
        {
            id: 2,
            name: "Turstarkuri Pilgrim Head",
            price: 148000,
            image: "/placeholder.svg",
            quantity: 1,
        },
        {
            id: 3,
            name: "Taunt Pop the Question",
            price: 5000,
            image: "/placeholder.svg",
            quantity: 1,
        },
        {
            id: 4,
            name: "Sapphire Sabre-Lynx",
            price: 37000,
            image: "/placeholder.svg",
            quantity: 1,
        },
    ];

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="container mx-auto px-4 py-8">
            <Header></Header>
            <h1 className="text-2xl font-bold mb-4">Giỏ hàng</h1>
            <p className="text-gray-600 mb-8">
                Danh sách các item bạn đã chọn mua
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b">
                                <th className="text-left py-2">Ảnh</th>
                                <th className="text-left py-2">Tên item</th>
                                <th className="text-left py-2">Giá bán</th>
                                <th className="text-left py-2">Số lượng</th>
                                <th className="text-left py-2">Xóa</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item) => (
                                <tr key={item.id} className="border-b">
                                    <td className="py-4">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={80}
                                            height={80}
                                            className="rounded"
                                        />
                                    </td>
                                    <td className="py-4">
                                        <p className="font-semibold">
                                            {item.name}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            Hiện còn: 1 sản phẩm
                                        </p>
                                    </td>
                                    <td className="py-4">
                                        {item.price.toLocaleString()} đ
                                    </td>
                                    <td className="py-4">
                                        <div className="flex items-center">
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                className="h-8 w-8"
                                            >
                                                <Minus className="h-4 w-4" />
                                            </Button>
                                            <Input
                                                type="number"
                                                value={item.quantity}
                                                className="w-16 mx-2 text-center"
                                                readOnly
                                            />
                                            <Button
                                                variant="outline"
                                                size="icon"
                                                className="h-8 w-8"
                                            >
                                                <Plus className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </td>
                                    <td className="py-4">
                                        <Button variant="ghost" size="icon">
                                            <Trash2 className="h-5 w-5" />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <Card>
                        <CardContent className="p-6">
                            <h2 className="text-xl font-semibold mb-4">
                                Thông tin thanh toán
                            </h2>
                            <div className="flex justify-between mb-2">
                                <span>Tổng sản phẩm</span>
                                <span>{totalItems}</span>
                            </div>
                            <div className="flex justify-between mb-4">
                                <span>Tổng tiền</span>
                                <span className="font-semibold text-blue-600">
                                    {totalPrice.toLocaleString()} đ
                                </span>
                            </div>
                            <Button className="w-full">XÓA GIỎ HÀNG</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="mt-8 text-sm text-gray-600">
                <p>Lưu ý:</p>
                <p>
                    Bạn cần phải đăng nhập để thanh toán, hoặc bạn có thể inbox
                    thanh toán qua fanpage.
                </p>
                <p>Steam của bạn phải đủ điều kiện giao dịch, xem ở đây</p>
                <p>
                    Do không phải tự động nên chỉ có thể xử lý đơn hàng từ (8h -
                    22h), mong bạn thông cảm.
                </p>
            </div>

            <FooterIcon></FooterIcon>
        </div>
    );
}
