import { FC } from "react";
import { ProductItem } from "@/types/product";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
    product: ProductItem; // Dữ liệu sản phẩm
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
    return (
        <div
            key={product.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
        >
            <Image
                src={product.image.filePath  }
                alt={product.name}
                width={150}
                height={150}
                className="w-full h-32 object-cover"
            />
            <div className="p-2 flex-grow">
                <h3 className="font-semibold text-md mb-1">{product.name}</h3>
                <p className="text-gray-600 mb-3 text-sm">
                    ${product.price.toFixed(2)}
                </p>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md">
                    <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
            </div>
        </div>
    );
};

export default ProductCard;
