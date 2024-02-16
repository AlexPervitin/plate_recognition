import React from 'react';
import { OptionButtonWrapper } from './styles';

const OptionButton = ({ icon: Icon, background, border, onClick }) => {
  return (
    <OptionButtonWrapper $background={background} $border={border} onClick={onClick}>
      <Icon />
    </OptionButtonWrapper>
  );
};

export default OptionButton;
