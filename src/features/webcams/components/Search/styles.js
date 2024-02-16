import styled from 'styled-components';

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 8px;
  border-radius: 6px;
  padding: 8px 16px;
  background: ${(props) => props.theme.colors.bgSearch};

  svg {
    min-width: 24px;
  }
`;

export const CustomInput = styled.input`
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: ${(props) => props.theme.colors.textMain};
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;

  &::-webkit-input-placeholder {
    color: ${(props) => props.theme.colors.textMain};
  }
`;

export const ButtonOpenGate = styled.button`
  display: flex;
  align-items: center;
  background: transparent;
  border: 1px solid ${(props) => props.theme.colors.openGateBr};
  border-radius: 4px;
  color: ${(props) => props.theme.colors.openGateText};
  padding: 0 20px;
  text-wrap: nowrap;
  font-size: 16px;
  font-weight: 400;
  line-height: 40px;
  cursor: pointer;
`;

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CloseWrapper = styled.div`
  display: flex;
  cursor: pointer;
`;
