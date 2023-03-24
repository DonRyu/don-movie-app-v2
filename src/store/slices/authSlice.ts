import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Cookies } from 'react-cookie';
import axios from 'axios';
import { notificationController } from '@app/controllers/notificationController';
export const API_HOST =
  process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_URL : process.env.REACT_APP_DEV_URL;

const auth = createAsyncThunk('auth/login', async (info: { data?: any; path: string }) => {
  const res = await axios({
    url: `${API_HOST}/auth/${info.path}`,
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

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userInfo: {},
    isLogin: false,
  },
  reducers: {
    logout: (state) => {
      state.isLogin = false;
    },
    login:(state) => {
      state.isLogin = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(auth.fulfilled, (state, action) => {
      if (action.payload === 'login success') {
        state.isLogin = true;
      }
    });
  },
});

export default authSlice.reducer;
export const { logout,login } = authSlice.actions;
export { auth };
