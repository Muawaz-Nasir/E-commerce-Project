import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addToCart } from "../Redux/cartActions"; // Import your cart action

const ProductDetails = () => {
  const { productID } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch(); // Redux dispatch for adding to cart

  const fetchSingleProduct = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productID}`
      );
      if (response.status === 200) {
        setProduct(response.data);
      } else {
        setError("Failed to fetch product details");
      }
    } catch (err) {
      setError("Error fetching the product details");
      console.error("Error fetching the product:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSingleProduct();
  }, [productID]);

  // Function to handle adding product to cart
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        quantity: 1,
        image: product.image,
      })
    );
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-indigo-600"></div>
      </div>
    );
  if (error) return <p className="text-red-600 text-center mt-10">{error}</p>;

  return (
    <div className="container mx-auto py-16 px-4 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
        <img
          className="w-full md:w-1/2 h-80 object-cover"
          src={product.image}
          alt={product.title}
        />
        <div className="p-6 md:w-1/2">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            {product.title}
          </h2>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <div className="mb-4">
            <span className="text-xl font-bold text-indigo-600">
              ${product.price}
            </span>
          </div>
          <div className="mb-4">
            <span className="text-gray-600 font-medium">Category: </span>
            <span className="text-gray-800">{product.category}</span>
          </div>
          <div className="mb-4">
            <span className="text-gray-600 font-medium">Rating: </span>
            <span className="text-gray-800">
              {product.rating?.rate} ({product.rating?.count} reviews)
            </span>
          </div>

          {/* Add to Cart Button */}
          <button
            className="mt-6 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
