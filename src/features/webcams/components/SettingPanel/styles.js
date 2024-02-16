import styled from 'styled-components';

export const SettingPanelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const TabsWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const TabsButton = styled.button`
  display: flex;
  padding: 4px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: ${(props) => props.theme.colors.textMain};
  background: ${(props) => (props.$active ? props.theme.colors.bgTab : 'transparent')};
`;

export const OptionButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;
