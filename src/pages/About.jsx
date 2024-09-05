import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">
          About Us
        </h1>

        <section className="about-section mb-12 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            About EcoMerc
          </h2>
          <p className="text-gray-600">
            EcoMerc is your go-to destination for eco-friendly products that are
            both affordable and high-quality. Our mission is to make sustainable
            shopping accessible to everyone.
          </p>
        </section>

        <section className="values-section mb-12 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Values
          </h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              Quality: We ensure the highest standards in all our products.
            </li>
            <li>
              Sustainability: We are committed to offering eco-friendly options.
            </li>
            <li>
              Customer Satisfaction: Your satisfaction is our top priority.
            </li>
          </ul>
        </section>

        <section className="shopping-section mb-12 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Shopping with EcoMerc
          </h2>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Free Delivery: Enjoy free delivery on all orders over $50.</li>
            <li>Self Pickup: Convenient self-pickup options are available.</li>
            <li>Warranty: We offer a 1-year warranty on selected items.</li>
          </ul>
          <Link to="/products">
            <button className="shop-now-button bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300">
              Shop Now
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;
