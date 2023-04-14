import { createSlice } from '@reduxjs/toolkit';
import { activeTask } from './operations';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    taskList: [],
    currentDate: new Date().toJSON().slice(0, 10),
  },
  reducers: {
    getTasks(state, action) {
      state.taskList = action.payload.tasks;
    },
  },
  extraReducers: builder => {
    builder.addCase(activeTask.fulfilled, (state, action) => {
      const idToUpdate = action.payload.updatedTask.id;
      const updatedDays = action.payload.updatedTask.days;
      const newTaskList = state.taskList.map(obj => {
        if (obj._id === idToUpdate) {
          const updatedObj = { ...obj };
          updatedObj.days = updatedObj.days.map(day => {
            const updatedDay = updatedDays.find(ud => ud.date === day.date);
            if (updatedDay) {
              return { ...day, ...updatedDay };
            } else {
              return day;
            }
          });
          return updatedObj;
        } else {
          return obj;
        }
      });
      state.taskList = newTaskList;
    });
    //   .addCase(loginUser.fulfilled, (state, action) => {
    //     state.user = action.payload.user;
    //     state.token = action.payload.token;
    //   })
    //   .addCase(logoutUser.fulfilled, state => {
    //     state.user = {
    //       email: '',
    //       id: '',
    //       balance: 0,
    //     };
    //     state.token = null;
    //     console.log(state);
    //   })
    //   .addCase(refreshUser.fulfilled, (state, action) => {
    //     state.user = action.payload.user;
    //     state.isRefreshing = false;
    //   })
    //   .addCase(refreshUser.pending, (state, action) => {
    //     state.isRefreshing = true;
    //   })
    //   .addCase(refreshUser.rejected, (state, action) => {
    //     state.isRefreshing = false;
    //   })
    //   .addCase(switchProgress.fulfilled, state => {
    //     state.data.week. = initData;
    //     state.token = null;
    //     console.log(state);
    //   })
    //   .addMatcher(
    //     action => action.type.endsWith('/pending'),
    //     (state, action) => {
    //       state.error = null;
    //     }
    //   )
    //   .addMatcher(
    //     action => action.type.endsWith('/rejected'),
    //     (state, action) => {
    //       state.error = action.payload ? action.payload : null;
    //     }
    //   )
    //   .addMatcher(
    //     action => action.type.endsWith('/fulfilled'),
    //     (state, action) => {
    //       state.error = null;
    //     }
    //   )
  },
});

export const { getTasks } = tasksSlice.actions;

export default tasksSlice.reducer;
