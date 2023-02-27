import { Button, Progress, RateProps } from 'antd';
import * as S from './Rate.styles';
import { PlusSquareOutlined, CheckSquareOutlined } from '@ant-design/icons';
import { useState } from 'react';

export const Rate: React.FC<RateProps> = (props) => {
  const [addTodo, setAddTodo] = useState<Boolean>(false);

  const addTodoList = () => {
    setAddTodo(!addTodo);
  };

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <S.Rate {...props} />
      {/* <button
        onClick={() => addTodoList()}
        style={{ background: 'none', border: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        {!addTodo ? (
          <PlusSquareOutlined style={{ fontSize: '30px' }} />
        ) : (
          <CheckSquareOutlined style={{ fontSize: '30px' }} />
        )}
      </button> */}
    </div>
  );
};
