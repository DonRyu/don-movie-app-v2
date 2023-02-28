import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Col, List, Row } from 'antd';
import { NftCard } from '@app/components/nft-dashboard/recently-added/nft-card/NftCard';
import { useResponsive } from '@app/hooks/useResponsive';
import * as S from './RecentlyAddedNft.styles';
import Api from '../../../api/movieAPI';
import InfiniteScroll from 'react-infinite-scroll-component';

export const RecentlyAddedNft: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [movieList, setMovieList] = useState<any>([]);

  const loadMoreData = () => {
    console.log('asdasda');
    if (loading) {
      return;
    }
    setLoading(true);
    Api.requestMovieData(1).then((res) => {
      let arr = [...movieList, ...res.results];
      setMovieList(arr);
      setLoading(false);
    });
  };

  useEffect(() => {
    loadMoreData();
  }, []);

  return (
    <InfiniteScroll
      dataLength={movieList.length}
      next={loadMoreData}
      hasMore={true}
      loader={<div>loader</div>}
      endMessage={<span>This is the end</span>}
      scrollableTarget="scrollableTarget"
    >
      <List
        grid={{ gutter: 16, column: 7 }}
        dataSource={movieList}
        renderItem={(item, key) => (
          <List.Item key={key}>
            <NftCard item={item} />
          </List.Item>
        )}
      />
    </InfiniteScroll>
  );
  
};
