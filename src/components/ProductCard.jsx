import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/cartActions";
import Button from "@mui/material/Button";

const ProductCard = (props) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: props.id,
        name: props.title,
        price: props.price,
        quantity: 1, // Initialize with a valid quantity
        image: props.image,
      })
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
      <img
        className="w-full h-48 object-cover"
        src={props.image}
        alt={props.title}
        onClick={props.clickHandler}
      />
      <div className="p-4">
        <h3
          onClick={props.clickHandler}
          className="text-lg font-semibold text-gray-800 mb-2"
        >
          {props.title}
        </h3>
        <div className="flex justify-between items-center text-gray-700 mb-2">
          <div className="flex items-center">
            <span className="font-semibold">Price: </span>
            <span className="ml-1 text-indigo-600" onClick={props.clickHandler}>
              ${props.price.toFixed(2)}
            </span>

            <Button
              variant="contained"
              color="primary"
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
