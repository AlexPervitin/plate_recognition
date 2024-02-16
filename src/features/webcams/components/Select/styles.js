import styled from 'styled-components';

export const CustomSelect = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 16px;
  border-radius: 10px;
  width: 100%;
  background: ${(props) => props.theme.colors.bgDropDown};
  color: ${(props) => props.theme.colors.textMain};
  font-size: 13px;
  font-weight: 400;
  line-height: 15px;
  cursor: pointer;

  svg {
    transform: ${(props) => (props.$isOpen ? 'rotate(180deg)' : '')};
  }
`;

export const SelectDropdown = styled.div`
  display: flex;
  flex-direction: column;
  padding: 9px 0;
  background: ${(props) => props.theme.colors.bgSelectDropdown};
  border: 1px solid ${(props) => props.theme.colors.brSelectDropdown};
  position: absolute;
  top: 46px;
  width: 100%;
  border-radius: 4px;
`;

export const SelectWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 206px;
  position: relative;
`;

export const SelectOption = styled.div`
  display: flex;
  padding: 8px 12px;
  color: ${(props) => props.theme.colors.textMain};
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
    background: ${(props) => props.theme.colors.bgSelectOptionHover};
  }
`;
