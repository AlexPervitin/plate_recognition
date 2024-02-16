import React, { useRef, useState } from 'react';
import { CustomSelect, SelectDropdown, SelectOption, SelectWrapper } from './styles';
import ArrowSelectIcon from '@/assets/images/cars/ArrowSelectIcon';
import { useClickOutside } from '@/common/hooks/useClickOutside';

const Select = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(options[0].value);
  const ref = useRef(null);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  useClickOutside({ ref: ref, onClose: handleClose });

  return (
    <SelectWrapper onClick={handleOpen}>
      <CustomSelect $isOpen={isOpen}>
        <span>{value}</span>
        <ArrowSelectIcon />
      </CustomSelect>
      {isOpen && (
        <SelectDropdown ref={ref}>
          {options.map(({ key, value }) => {
            return (
              <SelectOption key={key} onClick={() => handleChange(value)}>
                {value}
              </SelectOption>
            );
          })}
        </SelectDropdown>
      )}
    </SelectWrapper>
  );
};

export default Select;
