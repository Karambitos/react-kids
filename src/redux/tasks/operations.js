import axios from 'axios';
import { updatedBalance } from '../auth/slice';
// import { setAuthHeader, clearAuthHeader } from '../../api';
const { createAsyncThunk } = require('@reduxjs/toolkit');

export const switchProgress = createAsyncThunk(
  'task/switch',
  async ({ id, date }, { thunkAPI, dispatch }) => {
    try {
      const response = await axios.patch(`/task/switch/${id}`, date);
      dispatch(updatedBalance(response.data.updatedBalance));
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
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
