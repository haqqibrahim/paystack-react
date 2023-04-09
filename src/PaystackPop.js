import { React, useState } from "react";
import PaystackPop from "@paystack/inline-js";

const paystackIntegration = () => {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  const payWithPaystack = (e) => {
    e.preventDefault();
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: "pk_test_f10a3be05c1ae77ea713135351d4508fedffd92a",
      amount,
      email
    });
  };
  return (
    <div>
      <form id="paymentForm">
        <div class="form-group">
          <label for="email">Email Address</label>
          <input
            type="email"
            id="email-address"
            onChange={(e) => setEmail(e)}
          />
        </div>
        <div class="form-group">
          <label for="amount">Amount</label>
          <input type="tel" id="amount" onChange={(e) => setAmount(e)} />
        </div>

        <div class="form-submit">
          <button onclick={payWithPaystack} type="submit">
            {" "}
            Pay{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default paystackIntegration;
