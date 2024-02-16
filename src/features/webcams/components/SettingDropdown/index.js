import React, { useRef, useState } from 'react';
import { ButtonsWrapper, OptionsWrapper, SettingButton, SettingDropdownWrapper } from './styled';
import Checkbox from '../Checkbox';
import { useClickOutside } from '@/common/hooks/useClickOutside';
import { useTableContext } from '@/context/TableContext';

const SettingDropdown = ({ data, onClose, onChange, dropdownValue }) => {
  const [value, setValue] = useState(dropdownValue);
  const { isExpandedVideo } = useTableContext();

  const dropdownRef = useRef(null);

  useClickOutside({ ref: dropdownRef, onClose });

  const handleChange = (id) => {
    if (value.includes(id)) {
      setValue(value.filter((itemId) => itemId !== id));
    } else {
      setValue([...value, id]);
    }
  };

  const handleSubmit = () => {
    onChange(value);
    onClose();
  };

  return (
    <SettingDropdownWrapper ref={dropdownRef} $isExpandedVideo={isExpandedVideo}>
      <OptionsWrapper>
        {data.map(({ id, label }) => {
          return <Checkbox id={id} label={label} key={id} onChange={handleChange} value={value} />;
        })}
      </OptionsWrapper>
      <ButtonsWrapper>
        <SettingButton onClick={onClose}>Cancel</SettingButton>
        <SettingButton $apply onClick={handleSubmit}>
          Apply
        </SettingButton>
      </ButtonsWrapper>
    </SettingDropdownWrapper>
  );
};

export default SettingDropdown;
