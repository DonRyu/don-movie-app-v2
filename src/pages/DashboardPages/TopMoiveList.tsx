import React, { useEffect } from 'react';
import { Col, Row } from 'antd';
import { PageTitle } from '@app/components/common/PageTitle/PageTitle';
import { References } from '@app/components/common/References/References';
import { useResponsive } from '@app/hooks/useResponsive';
import { TrendingCreators } from '@app/components/nft-dashboard/trending-creators/TrendingCreators';
import { RecentlyAddedNft } from '@app/components/nft-dashboard/recently-added/RecentlyAddedNft';
import Api from '../../api/movieAPI';

const TopMoiveList: React.FC = () => {
  const { isDesktop } = useResponsive();
  const desktopLayout = <RecentlyAddedNft />;

  const mobileAndTabletLayout = (
    <Row gutter={[20, 24]}>
      <Col span={24}>
        <RecentlyAddedNft />
      </Col>
    </Row>
  );

  return (
    <>
      <PageTitle>TOP 100</PageTitle>
      <RecentlyAddedNft />
    </>
  );
};

export default TopMoiveList;
