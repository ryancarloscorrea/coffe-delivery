import styled from "styled-components";

export const ContainerOverview = styled.div`
  padding: 6rem 0;
  display: flex;
  justify-content: space-between;
`;

export const FirstColumn = styled.div`
  gap: 4.25rem;
  display: flex;
  flex-direction: column;
  max-width: 588px;
`;

export const ContainerTexts = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.text`
  font-family: "Baloo 2", sans-serif;
  font-weight: 800;
  font-size: 2.9rem;
  line-height: 62.4px;
  color: ${({ theme }) => theme.base.title};
`;

export const Subtitle = styled.text`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: ${({ theme }) => theme.base.subtitle};
`;

export const ContainerItens = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 567px;
  row-gap: 20px;
`;

export const ContainerItem = styled.div<{ withMarginBottom?: boolean }>`
  gap: 0.75rem;
  display: flex;
  font-family: "Roboto", sans-serif;
  align-items: center;
  margin-bottom: ${({ withMarginBottom }) => withMarginBottom && "1.5rem"};
`;

export const ContainerIcon = styled.div<{ backgroundColor: string }>`
  border-radius: 9999999px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextItem = styled.text`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 0.9rem;
  line-height: 21px;
  color: ${({ theme }) => theme.base.text};
`;
