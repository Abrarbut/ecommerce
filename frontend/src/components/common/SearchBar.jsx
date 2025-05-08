import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const handleSearchToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSearch = (e) => {
        e.preventDefault(); // Prevent form submission default behavior
        console.log("Search Term:", searchTerm);
        setIsOpen(false); // Close search bar after search
    };

    return (
        <div className={`flex items-center justify-center w-full transition-all duration-300 ${
            isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : ""
        }`}>
            {isOpen ? (
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto relative">
                        <form onSubmit={handleSearch} className="relative">
                            <div className="bg-gray-100 rounded-md flex items-center pr-4">
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    placeholder="Search"
                                    className="w-full h-12 pl-4 bg-gray-100 text-gray-800 focus:outline-none rounded-md"
                                    autoFocus
                                />
                                <button type="submit" className="text-gray-500 hover:text-gray-700">
                                    <HiMagnifyingGlass className="h-5 w-5" />
                                </button>
                            </div>
                        </form>
                        <button 
                            onClick={handleSearchToggle}
                            className="absolute -right-10 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                            <IoClose className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            ) : (
                <button
                    onClick={handleSearchToggle}
                    className="text-gray-700 hover:text-ecommerce-red"
                >
                    <HiMagnifyingGlass className="h-[18px] w-[18px]" />
                </button>
            )}
        </div>
    );
};

export default SearchBar;
