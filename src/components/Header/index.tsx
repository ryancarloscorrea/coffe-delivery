import React from "react";
import Logo from "../../assets/logo.svg";
import Locale from "../../assets/locale.svg";
import Cart from "../../assets/cart.svg";
import {
  HeaderContainer,
  StyleContainerLocaleCart,
  StyledButtonCart,
  StyleInfoLocale,
} from "./styled";

const Header = () => {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <StyleContainerLocaleCart>
        <StyleInfoLocale>
          <img src={Locale} alt="" />
          <text>Porto Alegre, RS</text>
        </StyleInfoLocale>
        <StyledButtonCart>
          <img src={Cart} alt="Carrinho de compras" />
        </StyledButtonCart>
      </StyleContainerLocaleCart>
    </HeaderContainer>
  );
};

export default Header;
