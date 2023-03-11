import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import * as S from './ProfileOverlay.styles';
import Button from 'antd/lib/button';
import { Cookies } from 'react-cookie';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { logout } from '@app/store/slices/authSlice';
const cookies = new Cookies();

export const ProfileOverlay: React.FC = ({ ...props }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const logoutButton = ()=>{
    cookies.remove('accessToken',{path:'/'});
    cookies.remove('nickname',{path:'/'});
    dispatch(logout())
  }

  return (
    <div {...props}>
      <S.Text>
        <Link to="/profile">{t('profile.title')}</Link>
      </S.Text>
      <S.ItemsDivider />
      <S.Text>
        <Button type='text' onClick={logoutButton}>{t('header.logout')}</Button>
      </S.Text>
    </div>
  );
};
