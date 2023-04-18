import { createSlice } from '@reduxjs/toolkit';
import { activeTask, switchProgress } from './operations';

const createWeekDatesArray = startWeekDate => {
  const dateArray = [];
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  if (startWeekDate) {
    for (let i = 0; i < 7; i++) {
      const newCurrentDate = new Date(startWeekDate);
      newCurrentDate.setDate(newCurrentDate.getDate() + i);
      const dayName = daysOfWeek[newCurrentDate.getDay()];
      const dateString = newCurrentDate.toISOString().slice(0, 10);
      dateArray.push({ date: dateString, day: dayName });
    }
  }
  return dateArray;
};

const updateTasks = (taskList, id, days) => {
  return taskList.map(obj => {
    if (obj._id === id) {
      const updatedObj = { ...obj };
      updatedObj.days = updatedObj.days.map(day => {
        const updatedDay = days.find(ud => ud.date === day.date);
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
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    taskList: [],
    startWeekDate: '',
    weekDates: [],
    currentDate: new Date().toJSON().slice(0, 10),
  },
  reducers: {
    getTasks(state, action) {
      state.taskList = action.payload.tasks;
      state.startWeekDate = action.payload.startWeekDate;
      state.weekDates = createWeekDatesArray(action.payload.startWeekDate);
    },
    switchDate(state, action) {
      state.currentDate = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(activeTask.fulfilled, (state, action) => {
        const taskList = state.taskList;
        const id = action.payload.updatedTask.id;
        const days = action.payload.updatedTask.days;
        state.taskList = updateTasks(taskList, id, days);
      })
      .addCase(switchProgress.fulfilled, (state, action) => {
        const taskList = state.taskList;
        const id = action.payload.updatedTask.id;
        const days = action.payload.updatedTask.days;
        state.taskList = updateTasks(taskList, id, days);
      })
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
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          console.log('rejected');
          // state.error = action.payload ? action.payload : null;
        }
      );
    //   .addMatcher(
    //     action => action.type.endsWith('/fulfilled'),
    //     (state, action) => {
    //       state.error = null;
    //     }
    //   )
  },
});

export const { getTasks, switchDate } = tasksSlice.actions;

export default tasksSlice.reducer;
