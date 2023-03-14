import authReducer from '@app/store/slices/authSlice';
import themeReducer from '@app/store/slices/themeSlice';
import rateReducer from '@app/store/slices/rateSlice';

export default {
  auth: authReducer,
  theme: themeReducer,
  rate: rateReducer,
};

export type RootState = ReturnType<any>;
