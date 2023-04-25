import { createSlice } from '@reduxjs/toolkit';
import { activeTask, switchProgress, createTask } from './operations';

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
    isLoading: true,
    error: null,
    currentDate: new Date().toJSON().slice(0, 10),
  },
  reducers: {
    getTasks(state, action) {
      action.payload.tasks.forEach(obj => {
        switch (obj.title) {
          case 'Застелить постель':
            obj.title = 'Make the bed';
            // obj.imageUrl = 'https://new-image-url.com';
            break;
          case 'Почитать книгу':
            obj.title = 'Read a book';
            // obj.imageUrl = 'https://new-image-url.com';
            break;
          case 'Пропылесосить':
            obj.title = 'Vacuum';
            // obj.imageUrl = 'https://new-image-url.com';
            break;
          case 'Полить цветы':
            obj.title = 'Water the flowers';
            // obj.imageUrl = 'https://new-image-url.com';
            break;
          case 'Выкинуть мусор':
            obj.title = 'Take the trash';
            // obj.imageUrl = 'https://new-image-url.com';
            break;
          case 'Почистить зубы':
            obj.title = 'Brush your teeth';
            // obj.imageUrl = 'https://new-image-url.com';
            break;
          case 'Подмести':
            obj.title = 'Sweep';
            // obj.imageUrl = 'https://new-image-url.com';
            break;
          case 'Собрать игрушки':
            obj.title = 'pick up toys';
            // obj.imageUrl = 'https://new-image-url.com';
            break;
          default:
            break;
        }
      });
      state.taskList = action.payload.tasks.reverse();
      state.startWeekDate = action.payload.startWeekDate;
      state.weekDates = createWeekDatesArray(action.payload.startWeekDate);
    },
    switchDate(state, action) {
      state.currentDate = action.payload;
    },
    refreshDate(state, action) {
      state.currentDate = new Date().toJSON().slice(0, 10);
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
      .addCase(createTask.fulfilled, (state, action) => {
        const newTask = {
          _id: action.payload.id,
          title: action.payload.title,
          reward: action.payload.reward,
          imageUrl: action.payload.imageUrl,
          days: action.payload.days,
        };
        state.taskList = [newTask, ...state.taskList];
      })
      .addMatcher(
        action => action.type.endsWith('/pending'),
        (state, action) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload ? action.payload : null;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        (state, action) => {
          state.error = null;
          state.isLoading = false;
        }
      );
  },
});

export const { getTasks, switchDate, refreshDate } = tasksSlice.actions;

export default tasksSlice.reducer;
