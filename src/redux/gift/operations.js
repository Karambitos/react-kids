import axios from 'axios';
// import { updatedBalance, updatedRewards } from '../auth/slice';
// import { NotificationManager } from 'react-notifications';
const { createAsyncThunk } = require('@reduxjs/toolkit');

// export const switchProgress = createAsyncThunk(
//   'task/switch',
//   async ({ id, date }, { thunkAPI, dispatch }) => {
//     try {
//       const response = await axios.patch(`/task/switch/${id}`, date);
//       dispatch(updatedBalance(response.data));
//       dispatch(updatedRewards(response.data));
//       console.log(response.data);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
// export const activeTask = createAsyncThunk(
//   'task/activeTask',
//   async ({ days, taskId }, { thunkAPI, dispatch, getState }) => {
//     const rewardsPlanned = getState().auth.rewards.rewardsPlanned;
//     try {
//       const response = await axios.patch(`/task/single-active/${taskId}`, days);
//       dispatch(updatedRewards(response.data));
//       const rewardsUpdated = response.data.updatedWeekPlannedRewards;
//       rewardsPlanned < rewardsUpdated
//         ? NotificationManager.success('You have scheduled a task!')
//         : NotificationManager.info(
//             'You have removed the task from the scheduled ones!'
//           );
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

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
  'task/getGifts',
  async (condition, { thunkAPI }) => {
    // {
    //   "giftIds": [
    //     1,
    //     2,
    //     8
    //   ]
    // }
    try {
      const response = await axios.patch(`/gift`, condition);
      console.log(response.data);
      // return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
