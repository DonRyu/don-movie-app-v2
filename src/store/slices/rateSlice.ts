import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Cookies } from 'react-cookie';
import axios from 'axios';
import { notificationController } from '@app/controllers/notificationController';
export const API_HOST =
  process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_URL : process.env.REACT_APP_DEV_URL;

const rate = createAsyncThunk('auth/rate', async (info: { data?: any; path: string }) => {
  const res = await axios({
    url: `${API_HOST}/api/${info.path}`,
    method: 'POST',
    data: info.data,
    withCredentials: true,
  });

  if (res.data.error) {
    notificationController.error({
      message: `${res.data.error}`,
    });
  }
  return res.data;
});

const rateSlice = createSlice({
  name: 'rate',
  initialState: {
    ratedList: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(rate.fulfilled, (state, action) => {
      if ((action.payload.msg = 'getRate')) {
        state.ratedList = action.payload.records;
      }
    });
  },
});

export default rateSlice.reducer;
// export const { logout,login } = authSlice.actions;
export { rate };
