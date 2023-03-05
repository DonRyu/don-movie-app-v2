import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Cookies } from 'react-cookie';
import axios from 'axios';
const cookies = new Cookies();
export const API_HOST =
  process.env.NODE_ENV === "production"
    ? "http://54.197.128.126:8080"
    : "http://localhost:8080";


const login = createAsyncThunk('auth/login', async () => {

  const res  = await axios({
    url: ``,
    method: 'GET',
  });


});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false,
  },
  reducers: {
    isLogin: (state, action) => {},
  },
  extraReducers: (builder) => {},
});

export default authSlice.reducer;
