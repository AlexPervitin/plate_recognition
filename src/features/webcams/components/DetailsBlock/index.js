import React, { Fragment, useState } from 'react';
import {
  DateCameraInfo,
  DateCameraInfoText,
  DateInfoWrapper,
  DetailsBlockWrapper,
  DetailsInfo,
  Divider,
  ListInfo,
  ListInfoInner,
  ListInfoTitle,
  ListInfoValue,
  NumberInfo,
  SettingButtons,
  TimeBlock,
  VideoContentItem,
  VideoPlaceholderBlock,
  VideoPlaceholderText,
  VideoSettings,
  VideoWrapper,
} from './styles';
import VideoPlaceholderIcon from '@/assets/images/cars/VideoPlaceholderIcon';
import OptionButton from '../OptionButton';
import ExpandIcon from '@/assets/images/cars/ExpandIcon';
import SettingIcon from '@/assets/images/cars/SettingIcon';
import { useTableContext } from '@/context/TableContext';
import SettingDropdown from '../SettingDropdown';
import { useGetCurrentTime } from '@/common/hooks/useGetCurrentTime';

const testImg3 = 'https://i.ibb.co/6WtSsxw/TestImg3.png';

const listInfoValue = [
  {
    key: 'Auto theft',
    value: 'Found',
  },
  {
    key: 'Interpol',
    value: '',
  },
  {
    key: 'FSSP',
    value: 'Found',
  },
  {
    key: 'Nalog.ru',
    value: '',
  },
  {
    key: 'Nalog.ru',
    value: '',
  },
  {
    key: 'Nalog.ru',
    value: '',
  },
];

const settingCamsValue = [
  {
    id: 1,
    label: 'Camera 1',
  },
  {
    id: 2,
    label: 'Camera 2',
  },
  {
    id: 3,
    label: 'Camera 3',
  },
  {
    id: 4,
    label: 'Camera 4',
  },
  {
    id: 5,
    label: 'Camera 5',
  },
  {
    id: 6,
    label: 'Camera 6',
  },
  {
    id: 7,
    label: 'Camera 7',
  },
  {
    id: 8,
    label: 'Camera 8',
  },
];

const DetailsBlock = () => {
  const { currentRow, handleExpandVideo, isExpandedVideo } = useTableContext();
  const [isShowSettings, setIsShowSettings] = useState(false);
  const [dropdownValue, setDropdownValue] = useState([]);

  const currentTime = useGetCurrentTime();

  const handleDropdownChange = (value) => {
    setDropdownValue(value);
  };

  const handleClickSettings = () => {
    setIsShowSettings((prev) => !prev);
  };

  const handleCloseSettings = () => {
    setIsShowSettings(false);
  };

  const optionButtonsValue = [
    {
      icon: ExpandIcon,
      background: 'bgBtnSetting',
      onClick: handleExpandVideo,
    },
    {
      icon: SettingIcon,
      background: 'bgBtnSetting',
      onClick: handleClickSettings,
    },
  ];

  return (
    <DetailsBlockWrapper $isExpandedVideo={isExpandedVideo}>
      <VideoWrapper $isVideos={!!dropdownValue.length} $videosLength={dropdownValue.length}>
        {!!dropdownValue.length ? (
          dropdownValue.map((_item, index) => {
            return <VideoContentItem key={index} />;
          })
        ) : (
          <VideoPlaceholderBlock>
            <VideoPlaceholderIcon />
            <VideoPlaceholderText>Video source is not selected for viewing</VideoPlaceholderText>
          </VideoPlaceholderBlock>
        )}
      </VideoWrapper>
      <DetailsInfo>
        <NumberInfo $isExpandedVideo={isExpandedVideo}>
          <VideoSettings>
            <TimeBlock>{currentTime}</TimeBlock>
            <SettingButtons>
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
              {isShowSettings && (
                <SettingDropdown
                  data={settingCamsValue}
                  onClose={handleCloseSettings}
                  onChange={handleDropdownChange}
                  dropdownValue={dropdownValue}
                />
              )}
            </SettingButtons>
          </VideoSettings>
          {!isExpandedVideo && (
            <>
              <Divider />
              {currentRow && (
                <>
                  <img src={testImg3} alt="number" />
                  <DateCameraInfo>
                    <DateInfoWrapper>
                      <DateCameraInfoText>{currentRow?.time.split(' ')[0]}</DateCameraInfoText>
                      <DateCameraInfoText $time>
                        {currentRow?.time.split(' ')[1]}
                      </DateCameraInfoText>
                    </DateInfoWrapper>
                    <DateCameraInfoText>{currentRow?.camera} </DateCameraInfoText>
                  </DateCameraInfo>
                </>
              )}
            </>
          )}
        </NumberInfo>
        {!isExpandedVideo && (
          <ListInfo>
            <ListInfoTitle>Found in the lists</ListInfoTitle>
            <Divider $right />
            <ListInfoInner>
              {listInfoValue.map(({ key, value }, index) => {
                return (
                  <Fragment key={index}>
                    <span>{key}</span>
                    <ListInfoValue $isValue={!!value}>{value || '---'}</ListInfoValue>
                  </Fragment>
                );
              })}
            </ListInfoInner>
          </ListInfo>
        )}
      </DetailsInfo>
    </DetailsBlockWrapper>
  );
};

export default DetailsBlock;
