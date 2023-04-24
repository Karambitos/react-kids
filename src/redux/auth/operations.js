import axios from 'axios';
import { setAuthHeader, clearAuthHeader } from '../../api';
import { getTasks } from '../tasks/slice';
const { createAsyncThunk } = require('@reduxjs/toolkit');
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

export const registerUser = createAsyncThunk(
  'auth/registration',
  async (credentials, { thunkAPI, dispatch }) => {
    try {
      const response = await axios.post(`/auth/register`, credentials);
      setAuthHeader(response.data.token);
      // console.log(response.data.week.startWeekDate);
      dispatch(getTasks(response.data.week));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { thunkAPI, dispatch }) => {
    try {
      const response = await axios.post('/auth/login', credentials);
      setAuthHeader(response.data.token);
      // console.log(response.data.week.startWeekDate);
      dispatch(getTasks(response.data.week));
      return response.data;
    } catch (error) {
      // Notify.failure('Incorect email or password');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { thunkAPI, getState }) => {
    const persistedToken = getState().auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      const response = await axios.post('/auth/logout', persistedToken);
      clearAuthHeader();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, { thunkAPI, getState, dispatch }) => {
    const persistedToken = getState().auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      setAuthHeader(persistedToken);
      const response = await axios.get('/user/info');
      dispatch(getTasks(response.data.week));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);