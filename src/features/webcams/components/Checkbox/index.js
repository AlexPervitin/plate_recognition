import React from 'react';
import { CheckboxWrapper, Label, StyledCheckbox } from './styles';

const Checkbox = ({ id, label, onChange, value }) => {
  return (
    <CheckboxWrapper>
      <StyledCheckbox
        type="checkbox"
        id={id}
        className="custom-checkbox"
        onChange={() => onChange(id)}
        checked={value.includes(id)}
      />
      <Label htmlFor={id} className="custom-label">
        {label}
      </Label>
    </CheckboxWrapper>
  );
};

export default Checkbox;
