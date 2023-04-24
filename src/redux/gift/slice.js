import { createSlice } from '@reduxjs/toolkit';
import { getGifts } from './operations';

const giftsSlice = createSlice({
  name: 'gifts',
  initialState: {
    gifts: [],
  },
  reducers: {
    // getTasks(state, action) {
    //   action.payload.tasks.forEach(obj => {
    //     switch (obj.title) {
    //       case 'Застелить постель':
    //         obj.title = 'Make the bed';
    //         // obj.imageUrl = 'https://new-image-url.com';
    //         break;
    //       case 'Почитать книгу':
    //         obj.title = 'Read a book';
    //         // obj.imageUrl = 'https://new-image-url.com';
    //         break;
    //       case 'Пропылесосить':
    //         obj.title = 'Vacuum';
    //         // obj.imageUrl = 'https://new-image-url.com';
    //         break;
    //       case 'Полить цветы':
    //         obj.title = 'Water the flowers';
    //         // obj.imageUrl = 'https://new-image-url.com';
    //         break;
    //       case 'Выкинуть мусор':
    //         obj.title = 'Take the trash';
    //         // obj.imageUrl = 'https://new-image-url.com';
    //         break;
    //       case 'Почистить зубы':
    //         obj.title = 'Brush your teeth';
    //         // obj.imageUrl = 'https://new-image-url.com';
    //         break;
    //       case 'Подмести':
    //         obj.title = 'Sweep';
    //         // obj.imageUrl = 'https://new-image-url.com';
    //         break;
    //       case 'Собрать игрушки':
    //         obj.title = 'pick up toys';
    //         // obj.imageUrl = 'https://new-image-url.com';
    //         break;
    //       default:
    //         break;
    //     }
    //   });
    //   state.taskList = action.payload.tasks.reverse();
    //   state.startWeekDate = action.payload.startWeekDate;
    //   state.weekDates = createWeekDatesArray(action.payload.startWeekDate);
    // },
    // switchDate(state, action) {
    //   state.currentDate = action.payload;
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(getGifts.fulfilled, (state, action) => {
        action.payload.ruGifts.forEach(obj => {
          switch (obj.title) {
            case 'Сладости':
              obj.title = 'Sweets';
              // obj.imageUrl = 'https://new-image-url.com';
              break;
            case 'Поход в кино':
              obj.title = 'movie date';
              // obj.imageUrl = 'https://new-image-url.com';
              break;
            case 'Подарок':
              obj.title = 'present';
              // obj.imageUrl = 'https://new-image-url.com';
              break;
            case 'Вечер пиццы':
              obj.title = 'pizza night';
              // obj.imageUrl = 'https://new-image-url.com';
              break;
            case 'Вечеринка с друзьями':
              obj.title = 'PARTY WITH FRIENDS';
              // obj.imageUrl = 'https://new-image-url.com';
              break;
            case 'Поход в макдональдс':
              obj.title = 'GOING TO McDonald’s';
              // obj.imageUrl = 'https://new-image-url.com';
              break;
            case 'Желание':
              obj.title = 'WISH';
              // obj.imageUrl = 'https://new-image-url.com';
              break;
            case 'Поход на каток':
              obj.title = 'ice skating';
              // obj.imageUrl = 'https://new-image-url.com';
              break;
            default:
              break;
          }
        });
        state.gifts = action.payload.ruGifts;
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

// export const { getTasks, switchDate } = giftsSlice.actions;

export default giftsSlice.reducer;
