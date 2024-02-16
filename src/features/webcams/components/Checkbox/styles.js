import styled from 'styled-components';

export const CheckboxWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  position: relative;

  .custom-label:before {
    content: '';
    -webkit-appearance: none;
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.colors.brCheckbox};
    border-radius: 4px;
    min-width: 16px;
    height: 16px;
    display: inline-block;
    position: relative;
    vertical-align: middle;
    cursor: pointer;
    margin-right: 8px;
  }

  .custom-checkbox:checked + .custom-label:after {
    content: '';
    display: block;
    position: absolute;
    top: -4px;
    left: 4px;
    width: 8px;
    height: 14px;
    border: solid #fff;
    border-width: 0 4px 4px 0;
    transform: rotate(45deg);
  }
`;

export const StyledCheckbox = styled.input`
  display: none;
`;

export const Label = styled.label`
  color: ${(props) => props.theme.colors.labelText};
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  user-select: none;
`;
