import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">
          Contact Us
        </h1>

        <section className="contact-info mb-12 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 mb-4">
            We'd love to hear from you! Whether you have a question about our
            products, need assistance, or just want to give feedback, feel free
            to reach out to us.
          </p>

          <div className="contact-details grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="contact-item">
              <h3 className="font-semibold text-gray-800">Our Address</h3>
              <p className="text-gray-600">
                123 EcoMerc Avenue,
                <br />
                Green City, EC 45678
              </p>
            </div>

            <div className="contact-item">
              <h3 className="font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-600">+1 234 567 890</p>
            </div>

            <div className="contact-item">
              <h3 className="font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600">support@ecomerc.com</p>
            </div>
          </div>
        </section>

        <section className="contact-form-section mb-12 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Contact Form
          </h2>
          <form className="contact-form space-y-4">
            <div>
              <label className="block text-gray-800" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>

            <div>
              <label className="block text-gray-800" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              />
            </div>

            <div>
              <label className="block text-gray-800" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Submit
            </button>
          </form>
        </section>

        <section className="social-media mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Follow Us
          </h2>
          <div className="social-links space-x-4">
            <a
              href="https://www.facebook.com/ecomerc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800 transition duration-300"
            >
              Facebook
            </a>
            <a
              href="https://www.twitter.com/ecomerc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800 transition duration-300"
            >
              Twitter
            </a>
            <a
              href="https://www.instagram.com/ecomerc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800 transition duration-300"
            >
              Instagram
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
