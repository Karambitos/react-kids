import { createSlice } from '@reduxjs/toolkit';

import {
  getCurrentUser,
  getUserBalance,
  loginUser,
  logoutUser,
  registerUser,
} from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    data: {
      user: {
        email: 'user@example.com',
        id: '507f1f77bcf86cd799439012',
        balance: 5,
      },
      week: {},
    },
    token: null,
    isLoading: true,
    isRefreshing: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.data.user = action.payload.user;
        state.data.week = action.payload.week;
        state.token = action.payload.token;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.data.user = action.payload.user;
        state.data.week = action.payload.week;
        state.token = action.payload.token;
      });
    // .addCase(logOut.fulfilled, state => {
    //   state.user = null;
    //   state.email = null;
    //   state.token = null;
    //   state.isLoggedIn = false;
    // })
    // .addCase(refreshUser.fulfilled, (state, action) => {
    //   state.user = action.payload;
    //   state.isLoggedIn = true;
    //   state.isRefreshing = false;
    // })
    // .addCase(refreshUser.pending, (state, action) => {
    //   state.isRefreshing = true;
    // })
    // .addCase(refreshUser.rejected, (state, action) => {
    //   state.isRefreshing = false;
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

// export const { balanceUpdate, setModalAddTransactionOpen } = authSlice.actions;

export default authSlice.reducer;
