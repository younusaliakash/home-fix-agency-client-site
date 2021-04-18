import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SimplePaymentForm from "../SimplePaymentForm/SimplePaymentForm";

const stripePromise = loadStripe("pk_test_51Ie9FaFAMtoaXwBGUdc5veGwabsWOxBpJpkwB9vUv1N05dsEbqZPKRJMhdLCJ3ylTtXF05CDP9l345uf3ZQcxsUT00xmri11X2");

const PaymentSystem = ({handlePayment}) => {
  return (
    <Elements stripe={stripePromise}>
      <SimplePaymentForm handlePayment={handlePayment}/>
    </Elements>
  );
};

export default PaymentSystem;
