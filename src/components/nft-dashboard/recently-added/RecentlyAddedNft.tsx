import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Row } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Carousel } from '@app/components/common/Carousel/Carousel';
import { NFTCardHeader } from '@app/components/nft-dashboard/common/NFTCardHeader/NFTCardHeader';
import { ViewAll } from '@app/components/nft-dashboard/common/ViewAll/ViewAll';
import { NftCard } from '@app/components/nft-dashboard/recently-added/nft-card/NftCard';
import { useResponsive } from '@app/hooks/useResponsive';
import * as S from './RecentlyAddedNft.styles';
import Api from '../../../api/movieAPI';

export const RecentlyAddedNft: React.FC = () => {
  const [movieList, setMovieList] = useState([]);
  const { t } = useTranslation();
  const { mobileOnly, isTablet } = useResponsive();

  useEffect(() => {
    Api.requestMovieData().then((res) => {
      setMovieList(res.results);
    });
  }, [movieList]);

  const cards = useMemo(() => {
    return {
      // mobile: movieList.slice(0, 3).map((nft) => <NftCard key={nft.title} nftItem={nft} />),
      tablet: movieList.map((item) => <NftCard item={item} />),
    };
  }, [movieList]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sliderRef = useRef<any>();

  return (
    <>
      <S.SectionWrapper>
        {cards.tablet}
        {/* {mobileOnly && cards.mobile} */}
      </S.SectionWrapper>
      {/* {mobileOnly && (
        <S.ViewAllWrapper>
          <ViewAll />
        </S.ViewAllWrapper>
      )} */}
    </>
  );
};
