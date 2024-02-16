import React from 'react';
import { OptionButtonsWrapper, SettingPanelWrapper, TabsButton, TabsWrapper } from './styles';
import OptionButton from '../OptionButton';
import SettingIcon from '@/assets/images/cars/SettingIcon';
import { tabs } from '../ResultsBlock';

const optionButtonsValue = [
  {
    icon: SettingIcon,
    background: 'bgBtnSetting',
    onClick: () => {
      console.log('click setting');
    },
  },
];

const SettingPanel = ({ tab, handleChangeTab }) => {
  return (
    <SettingPanelWrapper>
      <TabsWrapper>
        {tabs.map(({ id, title }) => {
          return (
            <TabsButton key={id} onClick={() => handleChangeTab(id)} $active={tab === id}>
              {title}
            </TabsButton>
          );
        })}
      </TabsWrapper>
      <OptionButtonsWrapper>
        {optionButtonsValue.map(({ icon, background, border, onClick }, index) => {
          return (
            <OptionButton
              key={index}
              icon={icon}
              background={background}
              border={border}
              onClick={onClick}
            />
          );
        })}
      </OptionButtonsWrapper>
    </SettingPanelWrapper>
  );
};

export default SettingPanel;
