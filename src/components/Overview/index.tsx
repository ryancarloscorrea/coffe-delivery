import React from "react";
import Card from "../../assets/cart.svg";
import ImageLogoCoffe from "../../assets/imageCoffe.png";
import ImageCoffe from "../../assets/coffe.svg";
import CartWhite from "../../assets/cart_white.svg";
import Clock from "../../assets/clock.svg";
import Box from "../../assets/box.svg";
import {
  ContainerIcon,
  ContainerItens,
  ContainerOverview,
  ContainerTexts,
  FirstColumn,
  Subtitle,
  TextItem,
  Title,
  ContainerItem,
} from "./styled";
import { useTheme } from "styled-components";

const Overview = () => {
  const theme = useTheme();
  return (
    <ContainerOverview>
      <FirstColumn>
        <ContainerTexts>
          <div>
            <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          </div>
          <div>
            <Subtitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </Subtitle>
          </div>
        </ContainerTexts>
        <ContainerItens>
          <ContainerItem>
            <ContainerIcon backgroundColor={theme.brand.yellowDark}>
              <img src={CartWhite} alt={"Carrinho de compras"} color={"blue"} />
            </ContainerIcon>
            <TextItem>Compra simples e segura</TextItem>
          </ContainerItem>
          <ContainerItem>
            <ContainerIcon backgroundColor={theme.base.text}>
              <img src={Box} alt={"Carrinho de compras"} color={"blue"} />
            </ContainerIcon>
            <TextItem>Embalagem mantém o café intacto</TextItem>
          </ContainerItem>
          <ContainerItem>
            <ContainerIcon backgroundColor={theme.brand.yellow}>
              <img
                src={Clock}
                alt={"Carrinho de compras"}
                color={"blue"}
                style={{ marginTop: 4.5 }}
              />
            </ContainerIcon>
            <TextItem>Entrega rápida e rastreada</TextItem>
          </ContainerItem>
          <ContainerItem>
            <ContainerIcon backgroundColor={theme.brand.purple}>
              <img
                src={ImageCoffe}
                alt={"Carrinho de compras"}
                color={"blue"}
              />
            </ContainerIcon>
            <TextItem>O café chega fresquinho até você</TextItem>
          </ContainerItem>
        </ContainerItens>
      </FirstColumn>
      <img src={ImageLogoCoffe} alt={"Café"} />
    </ContainerOverview>
  );
};

export default Overview;
