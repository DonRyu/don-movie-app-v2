import React from 'react';
import * as S from './References.styles';
import { FacebookOutlined, GithubOutlined, LinkedinOutlined, TwitterOutlined } from '@ant-design/icons';

export const References: React.FC = () => {
  return (
    <S.ReferencesWrapper>
      <S.Text>
        Made by{' '}
        <a href="https://donryu.info/" target="_blank" rel="noreferrer">
          Don Ryu{' '}
        </a>
      </S.Text>
    </S.ReferencesWrapper>
  );
};
