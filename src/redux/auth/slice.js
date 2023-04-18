import { createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import { loginUser, logoutUser, registerUser, refreshUser } from './operations';
// import { switchProgress } from '../tasks/operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      email: '',
      id: '',
      balance: 0,
    },
    token: null,
    isLoading: true,
    isRefreshing: false,
    error: null,
  },
  reducers: {
    updatedBalance(state, action) {
      console.log(action.payload);
      state.user.balance = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.user = {
          email: '',
          id: '',
          balance: 0,
        };
        state.token = null;
        console.log(state);
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
      });
    // .addCase(switchProgress.fulfilled, state => {
    //   state.data.week. = initData;
    //   state.token = null;
    //   console.log(state);
    // })
    // .addMatcher(
    //   action => action.type.endsWith('/pending'),
    //   (state, action) => {
    //     state.error = null;
    //   }
    // )
    // .addMatcher(
    //   action => action.type.endsWith('/rejected'),
    //   (state, action) => {
    //     state.error = action.payload ? action.payload : null;
    //   }
    // )
    // .addMatcher(
    //   action => action.type.endsWith('/fulfilled'),
    //   (state, action) => {
    //     state.error = null;
    //   }
    // );
  },
});

export const { updatedBalance } = authSlice.actions;

export default authSlice.reducer;
