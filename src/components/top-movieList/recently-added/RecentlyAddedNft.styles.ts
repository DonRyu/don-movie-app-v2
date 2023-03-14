import styled from 'styled-components';
import { Button } from '@app/components/common/buttons/Button/Button';
import { BREAKPOINTS } from '@app/styles/themes/constants';

export const SectionWrapper = styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr 1fr 1fr 1fr; 
 gap: 10px 10px;

  .slick-slide > div {
    display: flex;
  }

  .slick-list {
    padding-top: 40px !important;
    padding-bottom: 40px !important;
    margin-top: -40px;
    margin-bottom: -40px;
  }

  @media only screen and (max-width: ${BREAKPOINTS.md - 0.02}px) {
    display: flex;
    width: 100%;
    gap: 1.25rem;
    margin-bottom: 1.5rem;
  }
`;

export const ViewAllWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const CardWrapper = styled.div`
  margin: 0 0.625rem;
`;

export const NewCardWrapper = styled.div`
  width:100%;
  display:grid;  
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`

export const ArrowBtn = styled(Button)`
  color: var(--text-nft-light-color);
`;
