import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import { Image, Spin } from 'antd';
import { useTranslation } from 'react-i18next';
import { BaseForm } from '@app/components/common/forms/BaseForm/BaseForm';
import { VerificationCodeInput } from '@app/components/common/VerificationCodeInput/VerificationCodeInput';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { notificationController } from '@app/controllers/notificationController';
import VerifyEmailImage from '@app/assets/images/verify-email.webp';
import * as Auth from '@app/components/layouts/AuthLayout/AuthLayout.styles';
import * as S from './SecurityCodeForm.styles';
import { auth } from '@app/store/slices/authSlice';

interface SecurityCodeFormProps {
  onBack?: () => void;
  onFinish?: () => void;
}

export const SecurityCodeForm: React.FC<SecurityCodeFormProps> = ({ onBack, onFinish }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigateBack = useCallback(() => navigate(-1), [navigate]);
  const navigateForward = useCallback(() => navigate('/auth/new-password'), [navigate]);
  const [securityCode, setSecurityCode] = useState('');
  const [isLoading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!location.state) {
      navigate('/', { replace: true });
    }
  }, []);

  useEffect(() => {
    if (securityCode.length === 6) {
      setLoading(true);
      dispatch(auth({ data: { ...location.state, securityCode }, path: 'verify' })).then((res) => {
        return res;
      });
    }
  }, [securityCode, navigateForward, onFinish, dispatch]);

  return (
    <Auth.FormWrapper>
      <BaseForm layout="vertical" requiredMark="optional">
        <Auth.BackWrapper onClick={onBack || navigateBack}>
          <Auth.BackIcon />
          {t('common.back')}
        </Auth.BackWrapper>
        <S.ContentWrapper>
          <S.ImageWrapper>
            <Image src={VerifyEmailImage} alt="Not found" preview={false} />
          </S.ImageWrapper>
          <Auth.FormTitle>{t('securityCodeForm.title')}</Auth.FormTitle>
          <S.VerifyEmailDescription>{t('common.verifCodeSent')}</S.VerifyEmailDescription>
          {isLoading ? <Spin /> : <VerificationCodeInput autoFocus onChange={setSecurityCode} />}
          <Link to="/" target="_blank">
            <S.NoCodeText>{t('securityCodeForm.noCode')}</S.NoCodeText>
          </Link>
        </S.ContentWrapper>
      </BaseForm>
    </Auth.FormWrapper>
  );
};
