import axios from 'axios';
import { updatedBalance } from '../auth/slice';
import { updateModalShow } from '../gift/slice';
import { NotificationManager } from 'react-notifications';
const { createAsyncThunk } = require('@reduxjs/toolkit');

export const getGifts = createAsyncThunk(
  'task/getGifts',
  async (_, { thunkAPI }) => {
    try {
      const response = await axios.get(`/gift`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const buyGifts = createAsyncThunk(
  'task/buyGifts',
  async (condition, { thunkAPI, dispatch }) => {
    try {
      const response = await axios.patch(`/gift`, {
        giftIds: condition,
      });
      dispatch(updatedBalance(response.data));
      dispatch(updateModalShow());
      NotificationManager.success('You bought a gift!');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
