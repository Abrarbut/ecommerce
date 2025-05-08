import { Link } from "react-router-dom";
import featured from "../../assets/featured.webp"; 

const FeaturedCollection = () => {
    return (
        <section className="py-16 px-4 lg:px-0">
            <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-100 rounded-3xl">
                {/* left content */}
                <div className="lg:w-1/2 p-8 text-center lg:text-left">
                    <h2 className="text-lg font-semibold text-gray-700 mb-2">
                        Comfort and Style
                    </h2>
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        Apperal made for you everyday life
                    </h2>
                    <p className="text-lg text-gray-600 mb-6">
                        Discover high quality, stylish and comfortable apparels for your everyday life.
                        Designed to make you look and feel your best.
                    </p>
                    <Link to="/collections/all" className="inline-block bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition-colors">
                        Shop Now
                    </Link>
                </div>
                {/* right content */}
                <div className="lg:w-1/2 p-8">
                    <img src={featured} alt="Featured Collection"
                        className="w-full h-full object-cover rounded-3xl lg:rounded-br-3xl"
                    />
                </div>
            </div>
        </section>
    )
}
export default FeaturedCollection;
