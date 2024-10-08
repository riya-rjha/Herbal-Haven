/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Services from "../pages/Services";
import ContactUs from "../pages/ContactUs";
function Navbar() {
  return (
    <>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <nav className="bg-blue-50 backdrop-blur-md bg-blue-500/20 text-black w-full p-2 sticky top-0 z-50">
      <div className="px-4">
        <div className="flex items-center justify-between h-16 w-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">Herbal Haven</h1>
          </div>

          {/* Menu for larger screens */}
          <div className="hidden md:block">
            <div className="ml-10 flex space-x-4">
              <button
                onClick={() => navigate("/")}
                className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium text-[18px]"
              >
                Home
              </button>
              <button
                onClick={() => navigate("/about")}
                className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium text-[18px]"
              >
                About
              </button>
              <button
                onClick={() => navigate("/services")}
                className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium text-[18px]"
              >
                Services
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium text-[18px]"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
