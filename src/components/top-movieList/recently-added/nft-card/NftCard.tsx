import React from 'react';
import { useResponsive } from '@app/hooks/useResponsive';
import { formatNumberWithCommas, getCurrencyPrice } from '@app/utils/utils';
import { CurrencyTypeEnum } from '@app/interfaces/interfaces';
import * as S from './NftCard.styles';
import { Rate } from '@app/components/common/Rate/Rate';

export const NftCard: React.FC<any> = ({ item }) => {
  const { isTablet } = useResponsive();
  const MOVIE_POSETER_LINK = process.env.REACT_APP_MOVIE_POSTER_LINK;
  
  return (
    <S.Card padding={0} $img={`${MOVIE_POSETER_LINK}w500/${item.poster_path}`}>
      <S.NftImage src={`${MOVIE_POSETER_LINK}w500/${item.poster_path}`} alt="nftImage" />
      <Rate movie_id={item.id}/>
    </S.Card>
  );
};
