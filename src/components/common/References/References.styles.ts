import styled from 'styled-components';
import { media } from '@app/styles/themes/constants';

export const ReferencesWrapper = styled.div`
  margin-top:10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.span`
  display: flex;
  align-items: center;
  white-space: pre-wrap;
  @media only screen and ${media.xl} {
    margin-bottom: 0;
  }
`;

export const Icons = styled.div`
  margin-left: -0.5rem;
  margin-right: -0.5rem;
  display: flex;
  flex-wrap: nowrap;

  svg {
    font-size: 2rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }
`;
