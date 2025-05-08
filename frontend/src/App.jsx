import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/layout/UserLayout";
import Home from "./pages/Home";
import { Toaster } from "sonner";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import MyOrdersPage from "./pages/MyOrdersPage";

function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Toaster position="top-right" />
      <Routes>
        {/* Default layout route with Home, Orders, Profile */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="orders" element={<MyOrdersPage />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* These routes will render below UserLayout when needed */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
