import  Menu  from "@/components/Header";
import Footer from "@/components/Footer";
import ProductList from "@/components/ProductCard";
import Banner from "@/components/ui/Banner";
import ProductSlider from "@/components/ui/ProductSlider";

export default function Home() {
    return (
        <div>
            <Menu/>
            <Banner/>
            <ProductSlider/>
            <ProductList/>
            <br/>
            <Footer/>
        </div>
    );
}
