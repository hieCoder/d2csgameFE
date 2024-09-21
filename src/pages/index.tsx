import { Button } from "@/components/ui/button";
import  Menu  from "@/components/Header";
import Footer from "@/components/Footer";
import ProductList from "@/components/ProductCard";
import Banner from "@/components/ui/Banner";

export default function Home() {
    return (
        <div>
            <Menu/>
            <Banner/>
            <ProductList/>
            <br/>
            <Footer/>
        </div>
        // <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        //     <h1 className="text-4xl font-bold mb-4 text-gray-800">
        //         Welcome to My Game Store
        //     </h1>
        //     <Button className="bg-blue-500 text-white px-6 py-3 rounded-lg">
        //         Start Shopping
        //     </Button>
        // </div>
    );
}
