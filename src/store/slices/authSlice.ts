import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Cookies } from 'react-cookie';
import axios from 'axios';
const cookies = new Cookies();
export const API_HOST =
  process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_URL : process.env.REACT_APP_DEV_URL;

// const login = createAsyncThunk('auth/login', async (userInfo: { email: string; password: string }) => {
//   const res = await axios({
//     url: `${API_HOST}/api/login`,
//     method: 'POST',
//     data: userInfo,
//     withCredentials: true,
//   });
//   return res.data;
// });

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false,
    loginStatus: '',
  },
  reducers: {
    isLogin: (state, action) => {},
  },
  extraReducers: (builder) => {
    // builder.addCase(login.fulfilled, (state, action) => {
    //  state.isLogin = true
    // });
  },
});

export default authSlice.reducer;

