import Menu from "@/components/features/Header";
import Footer from "@/components/features/Footer";
import ProductList from "@/components/features/Products";
import Banner from "@/components/ui/Banner";
import ProductSlider from "@/components/ui/ProductSlider";

export default function Home() {
    return (
<<<<<<< HEAD
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
                Welcome to My Game Store
            </h1>
            <Button className="bg-blue-500 text-white px-6 py-3 rounded-lg transition ease-in-out duration-500 ">
                Start Shopping
            </Button>
=======
        <div>
            <Menu />
            <Banner />
            <ProductSlider />
            <ProductList />
            <br />
            <Footer />
>>>>>>> eee3959301d11a00c8f4e9fd86ec49da6d5d3d6f
        </div>
    );
}
