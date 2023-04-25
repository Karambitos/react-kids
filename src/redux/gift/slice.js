import { createSlice } from '@reduxjs/toolkit';
import { buyGifts, getGifts } from './operations';
import { NotificationManager } from 'react-notifications';

const giftsSlice = createSlice({
  name: 'gifts',
  initialState: {
    gifts: [],
    purchasedGiftIds: [],
    totalPrice: 0,
    lastGiftBuy: null,
    modalShow: false,
  },
  reducers: {
    updateGifts(state, action) {
      const selectedSume = state.gifts
        .filter(gift => gift.isSelected)
        .reduce((acc, gift) => acc + gift.price, 0);

      const curentGift = state.gifts.find(
        element => element.id === action.payload.itemId
      );

      state.totalPrice = curentGift.isSelected
        ? selectedSume - curentGift.price
        : selectedSume + curentGift.price;

      if (state.totalPrice > action.payload.balanse) {
        NotificationManager.error('You have not enough points!');
      } else {
        state.gifts.map(element => {
          element.id === action.payload.itemId &&
            (element.isSelected = !element.isSelected);
        });
      }
    },
    updateModalShow(state, action) {
      state.modalShow = !state.modalShow;
    },
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
      .addCase(buyGifts.fulfilled, (state, action) => {
        state.purchasedGiftIds = action.payload.purchasedGiftIds;
        const currentDate = new Date().toJSON().slice(0, 10);
        state.lastGiftBuy = new Date().toJSON().slice(0, 10);
        state.gifts.map(element => {
          element.isSelected = false;
        });
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

export const { updateGifts, updateModalShow } = giftsSlice.actions;

export default giftsSlice.reducer;
