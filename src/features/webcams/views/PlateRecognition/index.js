import React from 'react';
import { PlateRecognitionWrapper, SearchResultsWrapper } from './styles';
import SearchBlock from '../../components/SearchBlock';
import ResultsBlock from '../../components/ResultsBlock';
import DetailsBlock from '../../components/DetailsBlock';
import { useTableContext } from '@/context/TableContext';

const PlateRecognition = () => {
  const { isExpandedVideo } = useTableContext();

  return (
    <PlateRecognitionWrapper>
      {!isExpandedVideo && (
        <SearchResultsWrapper>
          <SearchBlock placeholder={'Searching'} />
          <ResultsBlock />
        </SearchResultsWrapper>
      )}
      <DetailsBlock />
    </PlateRecognitionWrapper>
  );
};

export default PlateRecognition;
