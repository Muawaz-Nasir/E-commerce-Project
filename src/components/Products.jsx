import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      if (response.status === 200) {
        setProducts(response.data);
        setFilteredProducts(response.data); // Initialize filteredProducts with all products
      } else {
        setError("Failed to fetch products");
      }
    } catch (err) {
      setError("Error fetching the products");
      console.error("Error fetching the products:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const filtered = products.filter((element) =>
      element.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredProducts(filtered); // Use setFilteredProducts to update state
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-indigo-600"></div>
      </div>
    );
  if (error) return <p className="text-center text-red-600 mt-10">{error}</p>;

  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Our Products</h1>
        </div>
        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Search Products..."
              onChange={handleSearch}
              value={search}
              className="w-full py-3 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.title}
              price={product.price}
              image={product.image}
              category={product.category}
              clickHandler={() => {
                navigate(`/ProductDetails/${product.id}`);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
