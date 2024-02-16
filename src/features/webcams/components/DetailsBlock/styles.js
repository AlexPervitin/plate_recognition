import styled from 'styled-components';

export const DetailsBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px 10px 0 0;
  padding: 8px;
  background: ${(props) => props.theme.colors.bgSecSection};
  width: 100%;
  max-width: ${(props) => (props.$isExpandedVideo ? 'initial' : '639px')};
  height: ${(props) =>
    props.$isExpandedVideo ? 'calc(100vh - 96px - 24px - 41px - 32px)' : 'initial'};
  gap: 12px;
`;

export const VideoWrapper = styled.div`
  border-radius: 5px;
  padding: 8px;
  background: ${(props) => props.theme.colors.bgVideoPlaceholder};
  width: 100%;
  height: 100%;

  display: ${(props) => (props.$isVideos ? 'grid' : 'flex')};
  grid-template-columns: ${(props) =>
    props.$isVideos ? (props.$videosLength < 2 ? '1fr' : '1fr 1fr') : 'none'};
  gap: 12px;
  flex-direction: ${(props) => (props.$isVideos ? 'none' : 'column')};
  justify-content: ${(props) => (props.$isVideos ? 'none' : 'center')};
  align-items: ${(props) => (props.$isVideos ? 'none' : 'center')};
`;

export const VideoPlaceholderBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const VideoPlaceholderText = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: ${(props) => props.theme.colors.textSecondary};
`;

export const DetailsInfo = styled.div`
  display: flex;
  gap: 16px;
`;

export const NumberInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.$isExpandedVideo ? '100%' : '377px')};
  padding: 0 8px;
`;

export const VideoSettings = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const TimeBlock = styled.div`
  display: flex;
  padding: 4px;
  border-radius: 4px;
  background: ${(props) => props.theme.colors.brTable};
  color: ${(props) => props.theme.colors.textMain};
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
`;

export const SettingButtons = styled.div`
  display: flex;
  gap: 8px;
  position: relative;
`;

export const Divider = styled.div`
  height: 1px;
  width: 100%;
  margin: ${(props) => (props.$right ? '16px 0 8px 0' : '16px 0')};
  background: ${(props) => props.theme.colors.bgDivider};
`;

export const DateCameraInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`;

export const DateCameraInfoText = styled.span`
  font-size: 10px;
  font-weight: 400;
  line-height: 14px;
  color: ${(props) => (props.$time ? props.theme.colors.textTime : props.theme.colors.tableText)};
`;

export const DateInfoWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const ListInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 226px;
  padding: 8px 16px;
`;

export const ListInfoTitle = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: ${(props) => props.theme.colors.textMain};
`;

export const ListInfoInner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px 48px;
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
`;

export const ListInfoValue = styled.div`
  color: ${(props) =>
    props.$isValue ? props.theme.colors.textFailed : props.theme.colors.textSecondary};
`;

export const VideoContentItem = styled.div`
  border: 1px solid red;
  width: 100%;
  border-radius: 6px;
`;
