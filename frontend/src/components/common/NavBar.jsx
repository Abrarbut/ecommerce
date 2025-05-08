import { Link } from "react-router-dom";
import {
    HiOutlineUser,
    HiOutlineShoppingBag,
    HiBars3BottomRight,
} from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import SearchBar from "./SearchBar";
import CartDrawer from "../layout/CartDrawer";
import { useState } from "react";

const NavBar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleCartDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    
    return (
    <>
        <nav className="container mx-auto flex items-center justify-between py-4 px-6">
            {/* Left - Logo */}
            <div>
                <Link to="/" className="text-2xl font-medium">
                    Rabbit
                </Link>
            </div>

            {/* Center - Navigation Links */}
            <div className="hidden md:flex space-x-6">
                <Link
                    to="#"
                    className="text-gray-700 hover:text-black text-sm font-medium uppercase"
                >
                    Men
                </Link>
                <Link
                    to="#"
                    className="text-gray-700 hover:text-black text-sm font-medium uppercase"
                >
                    Women
                </Link>
                <Link
                    to="#"
                    className="text-gray-700 hover:text-black text-sm font-medium uppercase"
                >
                    Top Wear
                </Link>
                <Link
                    to="#"
                    className="text-gray-700 hover:text-black text-sm font-medium uppercase"
                >
                    Bottom Wear
                </Link>
            </div>

            {/* Right - Icons */}
            <div className="flex items-center space-x-4">
                <Link to="/profile" className="hover:text-black">
                    <HiOutlineUser className="h-6 w-6 text-gray-700" />
                </Link>
                <button onClick={toggleCartDrawer} className="relative hover:text-black">
                    <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
                    <span className="absolute -top-1 bg-ecommerce-red text-white text-xs rounded-full px-2 py-0.5">
                        4
                    </span>
                </button>
                {/* Search */}
                <div className="overflow-hidden">
                    <SearchBar />
                </div>
                {/* Mobile Menu Button */}
                <button 
                    className="block md:hidden hover:text-black"
                    onClick={toggleMenu}
                >
                    <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
                </button>
            </div>
        </nav>

        {/* Cart Drawer */}
        <CartDrawer 
            drawerOpen={drawerOpen} 
            togglecartDrawer={toggleCartDrawer} 
        />

        {/* Mobile Menu Drawer */}
        <div className={`fixed top-0 left-0 w-3/4 sm:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-20 ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}>
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-xl font-semibold">Menu</h2>
                <button onClick={toggleMenu}>
                    <IoMdClose className="h-6 w-6 text-gray-700" />
                </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col p-4">
                <Link
                    to="#"
                    className="text-gray-700 hover:text-black text-sm font-medium uppercase py-3 border-b"
                    onClick={toggleMenu}
                >
                    Men
                </Link>
                <Link
                    to="#"
                    className="text-gray-700 hover:text-black text-sm font-medium uppercase py-3 border-b"
                    onClick={toggleMenu}
                >
                    Women
                </Link>
                <Link
                    to="#"
                    className="text-gray-700 hover:text-black text-sm font-medium uppercase py-3 border-b"
                    onClick={toggleMenu}
                >
                    Top Wear
                </Link>
                <Link
                    to="#"
                    className="text-gray-700 hover:text-black text-sm font-medium uppercase py-3"
                    onClick={toggleMenu}
                >
                    Bottom Wear
                </Link>
            </div>
        </div>
    </>
    );
};

export default NavBar;
