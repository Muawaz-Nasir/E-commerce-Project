import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingBag, Truck, ThumbsUp, ChevronRight } from "lucide-react";

const ProductCard = ({ title, price, image, onClick }) => (
  <div
    className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer"
    onClick={onClick}
  >
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">
        {title}
      </h3>
      <p className="text-xl font-bold text-indigo-600">${price.toFixed(2)}</p>
      <button className="mt-3 w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition duration-300">
        Add to Cart
      </button>
    </div>
  </div>
);

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data.slice(0, 8));
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch products. Please try again later.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleProductClick = (id) => {
    navigate(`/productdetails/${id}`);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-600 mt-10">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="hero-section">
        <div className="container mx-auto px-4 pt-12 pb-8">
          <div className="relative bg-gradient-to-r from-indigo-900 to-purple-900 rounded-xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center">
              {/* Text Section */}
              <div className="lg:w-1/2 mb-10 py-12 pl-12 pr-0 lg:mb-0 text-center lg:text-left">
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4 text-white">
                  Welcome to EcoMerc
                </h1>
                <p className="text-xl lg:text-2xl mb-8 text-gray-300">
                  Your one-stop shop for eco-friendly products that blend
                  sustainability with style.
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold px-8 py-3 rounded-full hover:from-indigo-600 hover:to-purple-700 transition duration-300 shadow-lg"
                >
                  Shop Now
                  <ChevronRight className="ml-2" size={24} />
                </Link>
              </div>

              {/* Image Section */}
              <div className="lg:w-1/2 flex justify-center lg:justify-end relative">
                <img
                  src="/src/assets/Asthetic.png"
                  alt="Eco-friendly products"
                  className="rounded-lg shadow-2xl object-cover max-h-96 w-auto lg:w-auto lg:max-w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-0 pb-8">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              onClick={() => handleProductClick(product.id)}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800"
          >
            View All Products
            <ChevronRight className="ml-2" size={20} />
          </Link>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose EcoMerc?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <ShoppingBag size={48} className="mx-auto mb-4 text-indigo-600" />
              <h3 className="text-xl font-semibold mb-2">Curated Products</h3>
              <p className="text-gray-600">
                Handpicked eco-friendly items for your lifestyle
              </p>
            </div>
            <div className="text-center">
              <Truck size={48} className="mx-auto mb-4 text-indigo-600" />
              <h3 className="text-xl font-semibold mb-2">
                Carbon-Neutral Shipping
              </h3>
              <p className="text-gray-600">
                We offset the carbon footprint of every delivery
              </p>
            </div>
            <div className="text-center">
              <ThumbsUp size={48} className="mx-auto mb-4 text-indigo-600" />
              <h3 className="text-xl font-semibold mb-2">
                Satisfaction Guaranteed
              </h3>
              <p className="text-gray-600">
                Love it or return it, no questions asked
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-indigo-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-xl text-gray-600 mb-8">
            Subscribe to our newsletter for exclusive deals and eco-tips
          </p>
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-r-md hover:bg-indigo-700 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
