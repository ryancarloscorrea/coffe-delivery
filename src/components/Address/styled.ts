import styled from "styled-components";

export const Container = styled.div`
  padding: 40px;
  display: flex;
`;

export const StyledInput = styled.input`
  background-color: ${(props) => props.theme.base.input};
  color: ${(props) => props.theme.base.label};
  padding: 12px;
  outline: none;
  border: 1px solid ${(props) => props.theme.base.button};
  border-radius: 4px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
`;
