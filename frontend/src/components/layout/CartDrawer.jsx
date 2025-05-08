import { IoMdClose } from "react-icons/io";
import CartContent from "../Cart/CartContent";

const CartDrawer = ({ drawerOpen, togglecartDrawer }) => {
    return (
        <div className={`fixed top-0 right-0 w-3/4 sm:w-1/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-20 ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}>
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
                <h2 className="text-xl font-semibold">Your Cart</h2>
                <button onClick={togglecartDrawer}>
                    <IoMdClose className="h-6 w-6 text-gray-700" />
                </button>
            </div>

            {/* Cart Content */}
            <div className="flex-grow p-4 overflow-y-auto">
                <CartContent />
            </div>

            {/* Checkout Section */}
            <div className="p-4 bg-white border-t">
                <button className="w-full bg-black text-white py-3 rounded-md mb-2 hover:bg-gray-800 transition-colors">
                    Checkout
                </button>
                <p className="text-sm tracking-wide text-gray-500 text-center">
                    Shipping & taxes calculated at checkout
                </p>
            </div>
        </div>
    );
};

export default CartDrawer;
