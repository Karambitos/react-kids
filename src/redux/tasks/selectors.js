import { createSelector } from '@reduxjs/toolkit';

export const getTasks = state => state.tasks.taskList;
export const getWeekDates = state => state.tasks.weekDates;
export const getCurrentDate = state => state.tasks.currentDate;
export const getStartWeekDate = state => state.tasks.startWeekDate;
export const getFilterTasks = createSelector(
  [state => state.tasks.taskList, state => state.tasks.currentDate],
  (items, currentDate) => {
    return items.filter(obj => {
      const matchingDay = obj.days.find(
        day => day.date === currentDate && day.isActive
      );
      // console.log(matchingDay);
      return !!matchingDay;
    });
  }
);
