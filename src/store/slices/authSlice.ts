import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {Cookies} from 'react-cookie'
const cookies = new Cookies()



const authSlice = createSlice({
  name: 'auth',
  initialState:{
    isLogin:false
  },
  reducers: {
    isLogin:(state, action)=>{
       
    }
  },
  extraReducers: (builder) => {
   
  },
});

export default authSlice.reducer;
