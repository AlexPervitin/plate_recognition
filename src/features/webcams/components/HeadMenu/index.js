import React from 'react';
import { ButtonAdd, ButtonAddText, HeadMenuTitle, HeadMenuWrapper } from './styles';
import Select from '../Select';
import PlusIcon from '@/assets/images/cars/PlusIcon';
import { SELECT_HEADER_OPTIONS } from '@/common/constants';

const HeadMenu = () => {
  return (
    <HeadMenuWrapper>
      <HeadMenuTitle>Plate recognition</HeadMenuTitle>
      <Select options={SELECT_HEADER_OPTIONS} />
      <ButtonAdd>
        <ButtonAddText>Add object</ButtonAddText>
        <PlusIcon />
      </ButtonAdd>
    </HeadMenuWrapper>
  );
};

export default HeadMenu;
