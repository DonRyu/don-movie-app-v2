import React, { useEffect } from 'react';
import { Avatar, Col, Row } from 'antd';
import { H6 } from '@app/components/common/typography/H6/H6';
import { ProfileOverlay } from '../ProfileOverlay/ProfileOverlay';
import { useAppSelector } from '@app/hooks/reduxHooks';
import { useResponsive } from '@app/hooks/useResponsive';
import * as S from './ProfileDropdown.styles';
import { Popover } from '@app/components/common/Popover/Popover';
import {Cookies} from 'react-cookie'
const cookies = new Cookies()


export const ProfileDropdown: React.FC = () => {
  const { isTablet } = useResponsive();

  const user = useAppSelector((state) => state.user.user);

  useEffect(() => {
    console.log('cookies.get()',cookies.get('accessToken'))
  }, []);

  return (
    <Popover content={<ProfileOverlay />} trigger="click">
      <S.ProfileDropdownHeader as={Row} gutter={[10, 10]} align="middle">
        <Col>
          <Avatar src={user?.imgUrl} alt="User" shape="circle" size={40} />
        </Col>
        {isTablet && (
          <Col>
            <H6>{`${user?.firstName} ${user?.lastName[0]}`}</H6>
          </Col>
        )}
      </S.ProfileDropdownHeader>
    </Popover>
  );
};
