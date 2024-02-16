import styled from 'styled-components';

export const HeadMenuWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

export const HeadMenuTitle = styled.span`
  font-size: 30px;
  font-weight: 500;
  line-height: 36px;
  color: ${(props) => props.theme.colors.textMain};
`;

export const ButtonAdd = styled.button`
  display: flex;
  align-items: center;
  padding: 0 20px 0 16px;
  border-radius: 4px;
  gap: 14px;
  background: ${(props) => props.theme.colors.bgAddSource};
  border: none;
  cursor: pointer;
`;

export const ButtonAddText = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 40px;
  color: ${(props) => props.theme.colors.textTertiary};
`;
