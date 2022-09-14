import styled from "styled-components";

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 50px;
  margin-top: 54px;
`;

export const StyledTextTitle = styled.text`
  font-family: "Baloo 2", sans-serif;
  font-weight: 800;
  font-size: 32px;
  color: ${(props) => props.theme.base.subtitle};
`;

export const ContainerPage = styled.div`
  min-height: 1645px;
`;
