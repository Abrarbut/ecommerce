import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";

const Topbar = () => {
  return (
    <div className="bg-ecommerce-red text-white">
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-2 px-4">
          {/* Left side - Social icons */}
          <div className="flex items-center gap-4 w-1/4">
            <a href="#" className="hover:text-gray-300">
              <TbBrandMeta className="h-5 w-5"/>
            </a>
            <a href="#" className="hover:text-gray-300">
              <IoLogoInstagram className="h-5 w-5"/>
            </a>
            <a href="#" className="hover:text-gray-300">
              <RiTwitterXLine className="h-4 w-4"/>
            </a>
          </div>

          {/* Center - Shipping text */}
          <div className="text-sm text-center w-2/4">
            <span>We ship worldwide - Fast and reliable shipping!</span>
          </div>

          {/* Right side - Phone number */}
          <div className="text-sm w-1/4 text-right">
            <span>+1234567890</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;