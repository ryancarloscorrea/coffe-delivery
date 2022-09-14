import React from "react";
import CardCoffee, { CardCoffeeProps } from "../CardCoffee";

const products: CardCoffeeProps[] = [
  {
    title: "Expresso tradicional",
    subtitle: "O tradicional café feito com água quente e grãos moídos",
    quantity: 0,
    price: 9.9,
    imgName: "expressoTradicional",
    tags: ["TRADICIONAL"],
  },
];

const Index = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 30 }}>
      {products.map((item) => (
        <CardCoffee {...item} />
      ))}
    </div>
  );
};

export default Index;
