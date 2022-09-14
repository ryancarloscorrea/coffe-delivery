import React from "react";
import CardCoffee, { CardCoffeeProps } from "../CardCoffee";
import { StyledContainer, StyledTextTitle, ContainerPage } from "./styles";

const products: CardCoffeeProps[] = [
  {
    title: "Expresso tradicional",
    subtitle: "O tradicional café feito com água quente e grãos moídos",
    quantity: 0,
    price: 9.9,
    imgName: "expressoTradicional",
    tags: ["TRADICIONAL"],
  },
  {
    title: "Expresso americano",
    subtitle: "Expresso diluído, menos intenso que o tradicional",
    quantity: 0,
    price: 9.9,
    imgName: "expressoAmericano",
    tags: ["TRADICIONAL"],
  },
  {
    title: "Expresso cremoso",
    subtitle: "Café expresso tradicional com espuma cremosa",
    quantity: 0,
    price: 9.9,
    imgName: "expressoCremoso",
    tags: ["TRADICIONAL"],
  },
  {
    title: "Expresso gelado",
    subtitle: "Bebida preparada com café expresso e cubos de gelo",
    quantity: 0,
    price: 9.9,
    imgName: "expressoGelado",
    tags: ["TRADICIONAL", "GELADO"],
  },

  {
    title: "Café com Leite",
    subtitle: "Meio a meio de expresso tradicional com leite vaporizado",
    quantity: 0,
    price: 9.9,
    imgName: "cafeComLeite",
    tags: ["TRADICIONAL", "COM LEITE"],
  },
  {
    title: "Latte",
    subtitle: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    quantity: 0,
    price: 9.9,
    imgName: "latte",
    tags: ["TRADICIONAL", "COM LEITE"],
  },
  {
    title: "Capuccino",
    subtitle: "Bebida com canela feita de doses iguais de café, leite e espuma",
    quantity: 0,
    price: 9.9,
    imgName: "capuccino",
    tags: ["TRADICIONAL", "COM LEITE"],
  },
  {
    title: "Macchiato",
    subtitle: "Café expresso misturado com um pouco de leite quente e espuma",
    quantity: 0,
    price: 9.9,
    imgName: "macchiato",
    tags: ["TRADICIONAL", "COM LEITE"],
  },

  {
    title: "Mocaccino",
    subtitle: "Café expresso com calda de chocolate, pouco leite e espuma",
    quantity: 0,
    price: 9.9,
    imgName: "mocaccino",
    tags: ["TRADICIONAL", "COM LEITE"],
  },
  {
    title: "Chocolate Quente",
    subtitle: "Bebida feita com chocolate dissolvido no leite quente e café",
    quantity: 0,
    price: 9.9,
    imgName: "chocolateQuente",
    tags: ["ESPECIAL", "COM LEITE"],
  },
  {
    title: "Cubano",
    subtitle: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    quantity: 0,
    price: 9.9,
    imgName: "cubano",
    tags: ["TRADICIONAL", "ALCOÓLICO", "GELADO"],
  },
  {
    title: "Havaiano",
    subtitle: "Bebida adocicada preparada com café e leite de coco",
    quantity: 0,
    price: 9.9,
    imgName: "havaiano",
    tags: ["ESPECIAL"],
  },
  {
    title: "Árabe",
    subtitle: "Bebida preparada com grãos de café árabe e especiarias",
    quantity: 0,
    price: 9.9,
    imgName: "arabe",
    tags: ["ESPECIAL"],
  },
  {
    title: "Irlandês",
    subtitle: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    quantity: 0,
    price: 9.9,
    imgName: "irlandes",
    tags: ["ESPECIAL", "ALCOÓLICO"],
  },
];

const Index = () => {
  return (
    <ContainerPage>
      <StyledTextTitle>Nossos cafés</StyledTextTitle>
      <StyledContainer>
        {products.map((item) => (
          <CardCoffee {...item} />
        ))}
      </StyledContainer>
    </ContainerPage>
  );
};

export default Index;
