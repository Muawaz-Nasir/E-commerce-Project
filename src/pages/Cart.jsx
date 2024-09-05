import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from "../Redux/cartActions";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import DialogContentText from "@mui/material/DialogContentText";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const [openForm, setOpenForm] = useState(false);
  const [openReceipt, setOpenReceipt] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    address: "",
  });
  const [receiptData, setReceiptData] = useState([]);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleProceedToCheckout = () => {
    setOpenForm(true); // Open the form to get user details
  };

  const handleFormSubmit = () => {
    // Set receipt data to match the current cart items
    const receipt = cart.map((item) => ({
      name: item.name,
      price: item.price,
      quantity: item.quantity,
      total: item.price * item.quantity,
    }));
    setReceiptData(receipt);
    setOpenReceipt(true); // Open the receipt modal after form submission
    dispatch(clearCart()); // Clear the cart after the receipt is generated
    setOpenForm(false); // Close the form modal after submission
  };

  const handleCloseReceipt = () => {
    setOpenReceipt(false); // Just close the receipt modal, no cart clearing
  };

  const handleInputChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-6">
          <ul>
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center mb-4"
              >
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover mr-4"
                  />
                  <div>
                    <h2 className="text-xl font-semibold">{item.name}</h2>
                    <p>${item.price.toFixed(2)}</p>
                    <div className="flex items-center mt-2">
                      <Button
                        variant="contained"
                        onClick={() => handleDecrease(item.id)}
                      >
                        -
                      </Button>
                      <span className="mx-4">{item.quantity}</span>
                      <Button
                        variant="contained"
                        onClick={() => handleIncrease(item.id)}
                      >
                        +
                      </Button>
                    </div>
                  </div>
                </div>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </Button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-6">
            <h2 className="text-xl font-bold">
              Total: ${calculateTotal().toFixed(2)}
            </h2>
            <Button
              variant="contained"
              color="primary"
              onClick={handleProceedToCheckout}
            >
              Proceed to Checkout
            </Button>
          </div>
        </div>
      )}

      {/* Modal for the user details form */}
      <Dialog open={openForm} onClose={() => setOpenForm(false)}>
        <DialogTitle>Enter Your Details</DialogTitle>
        <DialogContent>
          <Box component="form" noValidate autoComplete="off">
            <TextField
              label="Name"
              name="name"
              value={userDetails.name}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              name="email"
              value={userDetails.email}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Address"
              name="address"
              value={userDetails.address}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleFormSubmit}
            color="primary"
            variant="contained"
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>

      {/* Modal for displaying the receipt */}
      <Dialog open={openReceipt} onClose={handleCloseReceipt}>
        <DialogTitle>Receipt</DialogTitle>
        <DialogContent>
          <div className="p-4 bg-gray-100 rounded-lg">
            <DialogContentText>
              {receiptData.map((item, index) => (
                <div key={index} className="flex justify-between py-2">
                  <span>{item.name}</span>
                  <span>
                    ${item.price.toFixed(2)} x {item.quantity} = $
                    {item.total.toFixed(2)}
                  </span>
                </div>
              ))}
            </DialogContentText>
            <div className="mt-4 text-right">
              <h3 className="text-lg font-bold">
                Total: $
                {receiptData
                  .reduce((acc, item) => acc + item.total, 0)
                  .toFixed(2)}
              </h3>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button color="primary" variant="outlined">
            Pay Now
          </Button>
          <Button
            onClick={handleCloseReceipt}
            color="primary"
            variant="contained"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Cart;
