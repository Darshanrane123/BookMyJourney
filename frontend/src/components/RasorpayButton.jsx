import React from 'react';
import axios from 'axios';

function RazorpayButton() {
  const loadRazorpay = async () => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => initiatePayment();
    document.body.appendChild(script);
  };

  const initiatePayment = async () => {
    const paymentData = await axios.post('http://localhost:5000/api/payment/orders', {
      amount: 5, // Amount in rupees
      currency: 'INR',
    });

    const options = {
      key: 'rzp_test_xKSUvKQo7L8FWF', // Replace with your Razorpay key
      amount: paymentData.data.amount,
      currency: paymentData.data.currency,
      order_id: paymentData.data.id,
      name: 'Test Transaction',
      description: 'Test Payment',
      handler: (response) => {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div>
      <h2>Pay Rs. 5</h2>
      <button onClick={loadRazorpay}>Pay with Razorpay</button>
    </div>
  );
}

export default RazorpayButton;
