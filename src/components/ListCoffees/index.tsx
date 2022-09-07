import React from "react";
import CardCoffee from "../CardCoffee";

const Index = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
        <CardCoffee />
      ))}
    </div>
  );
};

export default Index;
