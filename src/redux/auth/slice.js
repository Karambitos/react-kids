import { createSlice } from '@reduxjs/toolkit';
import { loginUser, logoutUser, registerUser, refreshUser } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      email: '',
      id: '',
      balance: 0,
    },
    rewards: {
      rewardsGained: 0,
      rewardsPlanned: 0,
    },
    token: null,
    isLoading: true,
    isRefreshing: false,
    error: null,
  },
  reducers: {
    updatedBalance(state, action) {
      state.user.balance = action.payload.updatedBalance;
    },
    updatedRewards(state, action) {
      if (action.payload.updatedWeekGainedRewards) {
        state.rewards.rewardsGained = action.payload.updatedWeekGainedRewards;
      }
      if (action.payload.updatedWeekPlannedRewards) {
        state.rewards.rewardsPlanned = action.payload.updatedWeekPlannedRewards;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.rewards.rewardsGained = action.payload.week.rewardsGained;
        state.rewards.rewardsPlanned = action.payload.week.rewardsPlanned;
        state.token = action.payload.token;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.rewards.rewardsGained = action.payload.week.rewardsGained;
        state.rewards.rewardsPlanned = action.payload.week.rewardsPlanned;
        state.token = action.payload.token;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.rewards.rewardsGained = action.payload.week.rewardsGained;
        state.rewards.rewardsPlanned = action.payload.week.rewardsPlanned;
        state.isRefreshing = false;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.user = {
          email: '',
          id: '',
          balance: 0,
        };
        state.rewards = {
          rewardsGained: 0,
          rewardsPlanned: 0,
        };
        state.token = null;
        console.log(state);
      })
      .addCase(refreshUser.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
      });

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

export const { updatedBalance, updatedRewards } = authSlice.actions;

export default authSlice.reducer;
