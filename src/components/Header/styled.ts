import styled from "styled-components";

export const HeaderContainer = styled.div`
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const StyleContainerLocaleCart = styled.div`
  gap: 0.75rem;
  flex-direction: row;
  display: flex;
`;

export const StyleInfoLocale = styled.div`
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.brand.purpleLight};
  gap: 0.25rem;
  color: ${({ theme }) => theme.brand.purpleDark};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  display: flex;

  font-family: "Roboto", sans-serif;
  font-weight: 400;
`;

export const StyledButtonCart = styled.button`
  background-color: ${({ theme }) => theme.brand.yellowLight};
  padding: 0.5rem;
  border-style: none;
  border-radius: 6px;
`;
