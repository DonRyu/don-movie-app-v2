import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { useResponsive } from '@app/hooks/useResponsive';
import { TrendingCreators } from '@app/components/nft-dashboard/trending-creators/TrendingCreators';
import { RecentlyAddedNft } from '@app/components/nft-dashboard/recently-added/RecentlyAddedNft';
import Api from '../../api/API';

const TopMoiveList: React.FC = () => {
  const { isDesktop } = useResponsive();
  return (
    <>
      <RecentlyAddedNft />
    </>
  );
};

export default TopMoiveList;
