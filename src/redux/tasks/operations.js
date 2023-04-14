import axios from 'axios';
import { setAuthHeader, clearAuthHeader } from '../../api';
const { createAsyncThunk } = require('@reduxjs/toolkit');

export const switchProgress = createAsyncThunk(
  'task/switch',
  async (id, thunkAPI) => {
    const date = {
      date: '2023-04-13',
    };
    try {
      console.log(id);
      const response = await axios.patch(`/task/switch/${id}`, date);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const activeTask = createAsyncThunk(
  'task/activeTask',
  async ({ days, taskId }, thunkAPI) => {
    try {
      const response = await axios.patch(`/task/single-active/${taskId}`, days);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
