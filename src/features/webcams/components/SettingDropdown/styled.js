import styled from 'styled-components';

export const SettingDropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  border: 1px solid ${(props) => props.theme.colors.brDropdownSetting};
  background: ${(props) => props.theme.colors.bgDropdownSetting};
  padding: 16px;
  gap: 16px;
  position: absolute;
  top: ${(props) => (props.$isExpandedVideo ? '' : '32px')};
  bottom: ${(props) => (props.$isExpandedVideo ? '32px' : '')};
  right: ${(props) => (props.$isExpandedVideo ? '0' : '')};
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 12px;
  background: ${(props) => props.theme.colors.bgDropdownOptions};
  border-radius: 4px;
  width: 288px;
  max-height: 186px;
  overflow: auto;
`;

export const SettingButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: ${(props) => props.theme.colors.textMain};
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  background: ${(props) =>
    props.$apply ? props.theme.colors.bgDropdownBtnApply : props.theme.colors.bgDropdownBtn};
  border: none;
  height: 40px;
  border-radius: 4px;
  cursor: pointer;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
`;
