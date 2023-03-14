import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { notificationController } from '@app/controllers/notificationController';
import * as S from './LoginForm.styles';
import * as Auth from '@app/components/layouts/AuthLayout/AuthLayout.styles';
import { auth } from '@app/store/slices/authSlice';
import { useSelector } from 'react-redux';

interface LoginFormData {
  email: string;
  password: string;
}

export const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = (values: LoginFormData) => {
    setLoading(true);
    dispatch(auth({data:values,path:'login'})).then((res) => {
      if (res.payload === 'login success') {
        navigate('/', { replace: true });
      }
    });
    setLoading(false);
  };

  return (
    <Auth.FormWrapper>
      <BaseForm layout="vertical" onFinish={handleSubmit} requiredMark="optional">
        <Auth.FormTitle>{t('common.login')}</Auth.FormTitle>
        <S.LoginDescription>{t('login.loginInfo')}</S.LoginDescription>
        <Auth.FormItem
          name="user_id"
          label={t('common.email')}
          rules={[
            { required: true, message: t('common.requiredField') },
            {
              type: 'email',
              message: t('common.notValidEmail'),
            },
          ]}
        >
          <Auth.FormInput />
        </Auth.FormItem>
        <Auth.FormItem
          label={t('common.password')}
          name="password"
          rules={[{ required: true, message: t('common.requiredField') }]}
        >
          <Auth.FormInputPassword />
        </Auth.FormItem>
        <Auth.ActionsWrapper>
          <Link to="/auth/forgot-password">
            <S.ForgotPasswordText>{t('common.forgotPass')}</S.ForgotPasswordText>
          </Link>
          <Link to="/auth/sign-up">
            <S.ForgotPasswordText>{'Sign Up'}</S.ForgotPasswordText>
          </Link>
        </Auth.ActionsWrapper>
        <BaseForm.Item noStyle>
          <Auth.SubmitButton type="primary" htmlType="submit" loading={isLoading}>
            {t('common.login')}
          </Auth.SubmitButton>
        </BaseForm.Item>
      </BaseForm>
    </Auth.FormWrapper>
  );
};
