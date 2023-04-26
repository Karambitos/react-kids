import { useState, useSelector } from 'react';
import { getStartWeekDate } from '../redux/tasks/selectors';

export default function WeekDates() {
  const startWeekDate = useSelector(getStartWeekDate);
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
}
