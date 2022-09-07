import React from "react";
import ExampleCoffee from "../../assets/exampleCoffee.png";
import { Container } from "./styles";

const CardCoffee = () => {
  return (
    <>
      <Container>
        <img
          src={ExampleCoffee}
          alt={"café"}
          style={{ top: -25, position: "absolute" }}
        />
        <div>
          <text>tradicional</text>
        </div>
        <div>
          <text>Expresso Tradicional</text>
        </div>
        <div>
          <text>O tradicional café feito com água quente e grãos moídos</text>
        </div>
        <div>
          <text>value</text>
          <button>add</button>
          <button>card</button>
        </div>
      </Container>
    </>
  );
};

export default CardCoffee;
