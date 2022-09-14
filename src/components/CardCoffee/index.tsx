import React, { FC } from "react";
import CartButton from "../../assets/cart_white.svg";
import Less from "../../assets/less.svg";
import More from "../../assets/more.svg";
import {
  Container,
  ContainerPrice,
  ContainerSubTextTitle,
  ContainerTextTitle,
  Tag,
  ButtonCart,
  ContainerAddedItem,
  ContainerTextPrice,
  PriceLabelText,
  TextPrice,
  ContainerTags,
} from "./styles";

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
};

export interface CardCoffeeProps {
  tags: string[];
  title: string;
  subtitle: string;
  price: number;
  quantity: number;
  imgName: string;
}

const CardCoffee: FC<CardCoffeeProps> = (props) => {
  const { quantity, imgName, tags, price, title, subtitle } = props;
  const priceFormatted = formatPrice(price);
  return (
    <>
      <Container>
        <div
          style={{
            top: -40,
            position: "absolute",
          }}
        >
          <img src={`/coffees/${imgName}.png`} alt={title} />
        </div>
        <ContainerTags>
          {tags.map((tag) => (
            <Tag>
              <text>{tag}</text>
            </Tag>
          ))}
        </ContainerTags>

        <ContainerTextTitle>
          <text>{title}</text>
        </ContainerTextTitle>
        <ContainerSubTextTitle>
          <text>{subtitle}</text>
        </ContainerSubTextTitle>
        <ContainerPrice>
          <ContainerTextPrice>
            <PriceLabelText>{priceFormatted.substring(0, 2)}</PriceLabelText>
            <TextPrice>
              {priceFormatted.substring(2, priceFormatted.length)}
            </TextPrice>
          </ContainerTextPrice>
          <ContainerAddedItem>
            <button>
              <img src={Less} alt={"Diminuir item"} />
            </button>
            <text>{quantity}</text>
            <button>
              <img src={More} alt={"Aumentar item"} />
            </button>
          </ContainerAddedItem>
          <ButtonCart>
            <img
              src={CartButton}
              alt={"Carrinho de compras"}
              width={20}
              height={20}
            />
          </ButtonCart>
        </ContainerPrice>
      </Container>
    </>
  );
};

export default CardCoffee;
