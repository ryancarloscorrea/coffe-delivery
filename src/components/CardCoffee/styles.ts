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
