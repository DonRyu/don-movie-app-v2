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
import { auth, logout, login } from '@app/store/slices/authSlice';
import { useSelector } from 'react-redux';
import { RootState } from '@app/store/slices';
import { H6 } from '@app/components/common/typography/H6/H6';

// 토큰이 있음 토큰이 만기 => 로그아웃/ 토큰만기 아님 => 닉네임 보여줌
// 토큰이 없음 => 로그아웃
// 로그인을 했음 => islogined 콜 하면 안됨

export const ProfileDropdown: React.FC = () => {
  const cookies = new Cookies();
  const { isTablet } = useResponsive();
  const isLogin = useSelector((state: RootState) => state.auth.isLogin);
  const dispatch = useAppDispatch();
  const nickname = cookies.get('nickname');
  const accessToken = cookies.get('accessToken');
  useEffect(() => {
    !isLogin &&
      dispatch(auth({ data: { accessToken }, path: 'isLogined' })).then((res) => {
        if (!res.payload) {
          cookies.remove('accessToken', { path: '/' });
          cookies.remove('nickname', { path: '/' });
          dispatch(logout());
        } else {
          dispatch(login());
        }
      });
  }, []);

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
