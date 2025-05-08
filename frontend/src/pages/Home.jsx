import HeroSection from "../components/layout/HeroSection";
import GenderCollectionSection from "../components/product/GenderCollectionSection";
import NewArrivals from "../components/product/NewArrivals";
import ProductDetails from "../components/product/ProductDetails"; 
import ProductGrid from "../components/product/ProductGrid";
import FeaturedCollection from "../components/product/FeaturedCollection";
import FeaturesSection from "../components/product/FeaturesSection";
import Login from "./Login";

const placeHolderProducts = [
    {
        _id: 1,
        name: "Stylish Jacket",
        price: 120,
        images: [
            { url: "https://picsum.photos/500/500?random=1", altText: "Stylish Jacket 1" }
        ]
    },
    {
        _id: 2,
        name: "Stylish Jacket",
        price: 120,
        images: [
            { url: "https://picsum.photos/500/500?random=2", altText: "Stylish Jacket 2" }
        ]
    },
    {
        _id: 3,
        name: "Stylish Jacket",
        price: 120,
        images: [
            { url: "https://picsum.photos/500/500?random=3", altText: "Stylish Jacket 3" }
        ]
    },
    {
        _id: 4,
        name: "Stylish Jacket",
        price: 120,
        images: [
            { url: "https://picsum.photos/500/500?random=4", altText: "Stylish Jacket 4" }
        ]
    },
    {
        _id: 5,
        name: "Stylish Jacket",
        price: 120,
        images: [
            { url: "https://picsum.photos/500/500?random=5", altText: "Stylish Jacket 5" }
        ]
    },
    {
        _id: 6,
        name: "Stylish Jacket",
        price: 120,
        images: [
            { url: "https://picsum.photos/500/500?random=6", altText: "Stylish Jacket 6" }
        ]
    },
    {
        _id: 7,
        name: "Stylish Jacket",
        price: 120,
        images: [
            { url: "https://picsum.photos/500/500?random=7", altText: "Stylish Jacket 7" }
        ]
    },
    {
        _id: 8,
        name: "Stylish Jacket",
        price: 120,
        images: [
            { url: "https://picsum.photos/500/500?random=8", altText: "Stylish Jacket 8" }
        ]
    }

]

const Home = () => {
    return (
        <div>
            <HeroSection />
            <GenderCollectionSection />
            <NewArrivals/> 
            {/* Best Seller */}
            <h2 className="text-3xl text-center font-bold mb-4"> Best Seller</h2>
            <ProductDetails />
            <div className="container mx-auto px-4">
                <h2 className="text-3xl text-center font-bold mb-4">
                    Top Wears for Women
                </h2>
                <ProductGrid product={placeHolderProducts} />
            </div>
            <FeaturedCollection />
            <FeaturesSection />
            <Login/>
        </div>
    );
};

export default Home;
