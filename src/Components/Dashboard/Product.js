import React from "react";
import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCartRequest } from "../../Redux/actions";

const Product = ({ product, showButtons = true }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id, description, price, image, rating, title } = product;

  const handleDetails = () => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = () => {
    dispatch(
      addToCartRequest({
        userId: 5,
        date: new Date(),
        product: [{ productId: id, quantity: 1 }],
      })
    );
  };
  return (
    <div className="border-2 rounded-2xl shadow-xl h-full">
      <div className="h-80">
        <img src={image} alt="" className="object-contain w-full h-full" />
      </div>
      <div className="m-5">
        <p className="text-sm">{title}</p>
        <div className="flex justify-between my-5 text-xl">
          <p>$ {price}</p>
          <div className="flex flex-wrap">
            <ReactStars
              count={5}
              size={24}
              activeColor="#ffd700"
              value={rating.rate}
              edit={false}
              isHalf
            />{" "}
            ({rating.count})
          </div>
        </div>
        <p className="text-sm">{description}</p>
        {showButtons ? (
          <div className="flex justify-between mt-auto">
            <button
              onClick={handleAddToCart}
              className="bg-orange-500 py-2 px-6 mt-4 rounded-full transition duration-300 ease-in-out hover:bg-orange-400 hover:scale-110"
            >
              Buy Now
            </button>
            <button
              onClick={handleDetails}
              className="bg-blue-500 text-white py-2 px-6 mt-4 rounded-full transition duration-300 ease-in-out hover:bg-blue-400 hover:scale-110"
            >
              View Details
            </button>
          </div>
        ) : (
          <div>
            <button
              onClick={handleAddToCart}
              className="bg-blue-500 text-white py-2 px-6 mt-4 rounded-full transition duration-300 ease-in-out hover:bg-blue-400 hover:scale-110"
            >
              Add to Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
