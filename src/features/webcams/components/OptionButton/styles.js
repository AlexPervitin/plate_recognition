import styled from 'styled-components';

export const OptionButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  cursor: pointer;
  background: ${(props) =>
    props.$background ? props.theme.colors[props.$background] : 'transparent'};
  border: 1px solid ${(props) => (props.$border ? props.theme.colors[props.$border] : 'none')};
`;
