import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.base.card};
  border-radius: 6px 36px;
  padding: 1.25rem;
  max-width: 256px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 310px;
`;

export const Tag = styled.div`
  background-color: ${(props) => props.theme.brand.yellowLight};
  border-radius: 999999px;
  margin-top: 5rem;
  padding: 0.25rem 0.5rem;

  text {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    color: ${(props) => props.theme.brand.yellowDark};
    font-size: 0.625rem;
    text-transform: uppercase;
  }
`;

export const ContainerTextTitle = styled.div`
  font-family: "Baloo 2", sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  color: ${(props) => props.theme.base.subtitle};
  margin-top: 1rem;
`;

export const ContainerSubTextTitle = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 0.8rem;
  color: ${(props) => props.theme.base.label};
  margin-top: 0.5rem;
  text-align: center;
`;

export const ContainerPrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.125rem;
  width: 100%;
`;

export const ContainerTextPrice = styled.div`
  display: flex;
  align-items: end;
  margin-right: 1.5rem;
`;
export const PriceLabelText = styled.text`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 0.7rem;
  line-height: 21px;
  color: ${({ theme }) => theme.base.text};
  padding-bottom: 3px;
`;

export const TextPrice = styled.text`
  font-family: "Baloo 2", sans-serif;
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 31px;
  color: ${({ theme }) => theme.base.text};
`;

export const ContainerAddedItem = styled.div`
  border-radius: 6px;
  background-color: ${(props) => props.theme.base.button};
  padding: 0.5rem;
  gap: 0.5rem;
  display: flex;
  margin-right: 0.5rem;

  button {
    outline: none;
    border-style: none;
    background-color: transparent;
    cursor: pointer;
    &:hover {
      img {
        fill: red;
      }
    }
  }

  text {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    color: ${({ theme }) => theme.base.title};
    line-height: 21px;
  }
`;

export const ButtonCart = styled.button`
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.brand.purpleDark};
  outline: none;
  border-style: none;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  cursor: pointer;

  height: 100%;
  align-items: center;
  &:hover {
    background-color: ${({ theme }) => theme.brand.purple};
  }
`;
