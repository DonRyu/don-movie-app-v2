import { Button, Progress, RateProps } from 'antd';
import * as S from './Rate.styles';
import { PlusSquareOutlined, CheckSquareOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@app/store/slices';
import { notificationController } from '@app/controllers/notificationController';
import { useAppDispatch } from '@app/hooks/reduxHooks';
import { rate } from '@app/store/slices/rateSlice';
import { logout } from '@app/store/slices/authSlice';

export const Rate: React.FC<any> = (props) => {
  const isLogin = useSelector((state: RootState) => state.auth.isLogin);
  const ratedList = useSelector((state: RootState) => state.rate.ratedList);
  const [value, setValue] = useState(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getUseRate();
  }, [isLogin]);

  const getUseRate = () => {
    if (isLogin && ratedList) {
      const obj = ratedList?.find((item: any) => {
        return item.movie_id === props.movie_id;
      });
      return obj?.rating;
    }
  };

  const setRate = (value: number) => {
    if (!isLogin) {
      setValue(0);
      return notificationController.error({
        message: `You should login`,
      });
    }
    dispatch(rate({ data: { rate: value, movie_id: props.movie_id }, path: 'setRate' })).then((res) => {
      if (!res) dispatch(logout());
    });
    setValue(value);
  };

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <S.Rate {...props} onChange={setRate} value={value > 0 ? value : getUseRate()} />
    </div>
  );
};
