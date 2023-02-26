import React from 'react';
import { useResponsive } from '@app/hooks/useResponsive';
import { formatNumberWithCommas, getCurrencyPrice } from '@app/utils/utils';
import { CurrencyTypeEnum } from '@app/interfaces/interfaces';
import * as S from './NftCard.styles';


export const NftCard: React.FC<any> = ({ item }) => {
  const { isTablet } = useResponsive();
  const MOVIE_POSETER_LINK = process.env.REACT_APP_MOVIE_POSTER_LINK;

  const tabletLayout = (
    <>
      <S.InfoHeader>
        <S.InfoText>@{item.title}</S.InfoText>
      </S.InfoHeader>

      <S.InfoFooter>
        <S.CurrentBidWrapper>
          <S.CurrentBid>Current Bid</S.CurrentBid>
          <S.BidCrypto>
            {getCurrencyPrice(formatNumberWithCommas(item.title), CurrencyTypeEnum.ETH, false)}
          </S.BidCrypto>
        </S.CurrentBidWrapper>

        <S.CurrentBidWrapper>
          <S.Bid>{getCurrencyPrice(formatNumberWithCommas(item.title), CurrencyTypeEnum.USD)}</S.Bid>
        </S.CurrentBidWrapper>
      </S.InfoFooter>
    </>
  );

  // const mobileLayout = (
  //   <>
  //     <S.InfoRow>
  //       <S.InfoText>@{item.author}</S.InfoText>
  //       <S.BidCrypto>
  //         {getCurrencyPrice(formatNumberWithCommas(item.currentBidCrypto), CurrencyTypeEnum.ETH, false)}
  //       </S.BidCrypto>
  //     </S.InfoRow>

  //     <S.InfoRow>
  //       <S.CurrentBid>Current Bid</S.CurrentBid>
  //       <S.Bid>{getCurrencyPrice(formatNumberWithCommas(item.currentBid), CurrencyTypeEnum.USD)}</S.Bid>
  //     </S.InfoRow>
  //   </>
  // );

  // w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg

  console.log('item',item)

  return (
    <S.Card padding={0} $img={`${MOVIE_POSETER_LINK}w500/${item.poster_path}`}>
      <S.NftImage src={`${MOVIE_POSETER_LINK}w500/${item.poster_path}`} alt="nftImage" />
      <S.NftInfo>
        <S.InfoRow>
          <S.Title>{item.title}</S.Title>
        </S.InfoRow>
      </S.NftInfo>
    </S.Card>
  );
};
