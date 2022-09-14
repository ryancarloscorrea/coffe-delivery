import React from "react";
import Address from "../components/Address";

const Checkout = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Address />
      </div>
    </div>
  );
};

export default Checkout;
