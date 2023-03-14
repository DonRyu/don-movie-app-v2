import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, Divider, List, Row, Skeleton } from 'antd';
import { NftCard } from '@app/components/top-movieList/recently-added/nft-card/NftCard';
import { useResponsive } from '@app/hooks/useResponsive';
import * as S from './RecentlyAddedNft.styles';
import Api from '../../../api/API';
import InfiniteScroll from 'react-infinite-scroll-component';
import { NewCardWrapper } from './RecentlyAddedNft.styles';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { rate } from '@app/store/slices/rateSlice';
import { RootState } from '@app/store/slices';
import { useSelector } from 'react-redux';

export const RecentlyAddedNft: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [movieList, setMovieList] = useState<any>([]);
  const [page, setPage] = useState<number>(1);
  const isLogin = useSelector((state: RootState) => state.auth.isLogin);
  const dispatch = useAppDispatch();

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    setPage((page) => page + 1);
    Api.requestMovieData(page).then((res) => {
      let arr = [...movieList, ...res.results];
      setMovieList(arr);
      setLoading(false);
    });
  };

  useEffect(() => {
    loadMoreData();
  }, []);
  useEffect(() => {
    isLogin && dispatch(rate({ data: {}, path: 'getRate' }));
  }, [isLogin]);

  return (
    <div
      id="scrollableDiv"
      style={{
        width: '100%',
        height: '100%',
        overflow: 'auto',
        padding: '0 8px',
      }}
    >
      <InfiniteScroll
        dataLength={movieList.length}
        next={loadMoreData}
        hasMore={movieList.length <= 100}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={<Divider plain>This is the Top 100 movies now</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
          grid={{
            gutter: 16,
            xs: 2,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 5,
            xxl: 6,
          }}
          dataSource={movieList}
          renderItem={(item, key) => (
            <List.Item key={key}>
              <NftCard item={item} />
            </List.Item>
          )}
        />
      </InfiniteScroll>
    </div>
  );
};
