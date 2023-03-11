import React, { useEffect, useState } from 'react';
import { Avatar, Col, Row } from 'antd';
import { ProfileOverlay } from '../ProfileOverlay/ProfileOverlay';
import { useAppDispatch, useAppSelector } from '@app/hooks/reduxHooks';
import { useResponsive } from '@app/hooks/useResponsive';
import * as S from './ProfileDropdown.styles';
import { Popover } from '@app/components/common/Popover/Popover';
import { Cookies } from 'react-cookie';
import { Button } from '@app/components/common/buttons/Button/Button';
import { Link } from 'react-router-dom';
import { use } from 'echarts';
import { auth } from '@app/store/slices/authSlice';
import { useSelector } from 'react-redux';
import { RootState } from '@app/store/slices';
import { H6 } from '@app/components/common/typography/H6/H6';
const cookies = new Cookies();

export const ProfileDropdown: React.FC = () => {
  const { isTablet } = useResponsive();
  const isLogin = useSelector((state: RootState) => state.auth.isLogin);
  let nickname = cookies.get('nickname');
  return (
    <>
      {isLogin ? (
        <Popover content={<ProfileOverlay />} trigger="click">
          <S.ProfileDropdownHeader as={Row} gutter={[10, 10]} align="middle">
            <Col>
              <Avatar src={''} alt="User" shape="circle" size={40} />
            </Col>
            {isTablet && (
              <Col>
                <H6>{`${nickname}`}</H6>
              </Col>
            )}
          </S.ProfileDropdownHeader>
        </Popover>
      ) : (
        <Link to={'/auth/login'}>
          <Button type={'primary'}>Login</Button>
        </Link>
      )}
    </>
  );
};
