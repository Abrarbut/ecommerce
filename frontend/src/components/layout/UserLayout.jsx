import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";

const UserLayout = () => {
  return (
    <>
      <Header />
      <Outlet /> {/* Dynamic rendering of Home, Orders, Profile */}
      <Footer />
    </>
  );
};

export default UserLayout;
