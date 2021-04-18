import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "react-bootstrap";
import { useState } from "react";

const SimplePaymentForm = ({handlePayment}) => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentsError, setPaymentsError] = useState(null);
  const [paymentsSuccess, setPaymentsSuccess] = useState(null);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
      setPaymentsError(error.message);
      setPaymentsSuccess(null);
    } else {
      // console.log("[PaymentMethod]", paymentMethod);
      setPaymentsSuccess(paymentMethod.id);
      setPaymentsError(null);
      handlePayment(paymentMethod.id)
    }
  };
  return (
    <div className="payment">
      <form onSubmit={handleSubmit}>
        <CardElement />
        <Button className="mt-3" type="submit" disabled={!stripe}>
          Pay
        </Button>
      </form>
      {paymentsError && <p style={{ color: "red" }}>{paymentsError}</p>}
      {paymentsSuccess && (
        <p style={{ color: "green" }}>Payment was successfull</p>
      )}
    </div>
  );
};

export default SimplePaymentForm;
