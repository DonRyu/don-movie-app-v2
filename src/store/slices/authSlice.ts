import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Cookies } from 'react-cookie';
const cookies = new Cookies();

const login = createAsyncThunk('auth/login', async () => {
  const resp = await fetch('https://api.countapi.xyz/hit/opesaljkdfslkjfsadf.com/visits');
  const data = await resp.json();
  return data.value;
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
