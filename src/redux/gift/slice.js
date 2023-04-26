import { createSlice } from '@reduxjs/toolkit';
import { buyGifts, getGifts } from './operations';
import { NotificationManager } from 'react-notifications';
import Money from '../../assets/money.png';
import Shopping from '../../assets/Shopping.png';

const giftsSlice = createSlice({
  name: 'gifts',
  initialState: {
    gifts: [],
    purchasedGiftIds: [],
    totalPrice: 0,
    lastGiftBuy: null,
    modalShow: false,
    isLoading: false,
    error: null,
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
          return (
            element.id === action.payload.itemId &&
            (element.isSelected = !element.isSelected)
          );
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
              obj.title = 'New dress';
              obj.imageUrl = Shopping;
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
              obj.title = 'Pocket money';
              obj.imageUrl = Money;
              break;
            default:
              break;
          }
        });
        state.gifts = action.payload.ruGifts;
      })
      .addCase(buyGifts.fulfilled, (state, action) => {
        state.purchasedGiftIds = action.payload.purchasedGiftIds;
        state.lastGiftBuy = new Date().toJSON().slice(0, 10);
        state.gifts.map(element => {
          return (element.isSelected = false);
        });
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
          state.isLoading = false;
          state.error = null;
        }
      );
  },
});

export const { updateGifts, updateModalShow } = giftsSlice.actions;

export default giftsSlice.reducer;
