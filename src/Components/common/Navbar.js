import React from "react";
import { useNavigate } from "react-router-dom";
import { CartIcon } from "../../assets/cartIcon";

const Navbar = () => {
    const navigate = useNavigate();
    const handleCartClick = () => {
        navigate('/cart')
    }
    const handleHomePage = () => {
        navigate('/dashboard')
    }
  return (
    <div className="bg-orange-400 p-4 mb-4 shadow-2xl text-white">
      <div className="flex justify-between">
        <button onClick={handleHomePage} className="hover:bg-white hover:bg-opacity-30 p-3 rounded-full text-3xl">Fake Store</button>
        <div className="my-auto">
            <button onClick={handleCartClick} className="hover:bg-white hover:bg-opacity-30 p-3 rounded-full">
                <CartIcon />
            </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
