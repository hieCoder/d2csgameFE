import Menu from "@/components/features/Header";
import Footer from "@/components/features/Footer";
import Banner from "@/components/ui/Banner";
import ProductList from "@/components/features/Products";
// import ProductSlider from "@/components/ui/ProductSlider";

export default function Home() {
    return (
        <div>
            <Menu />
            <Banner />
            {/* <ProductSlider /> */}
            <ProductList />
            <br />
            <Footer />
        </div>
    );
}
