import { createSelector } from '@reduxjs/toolkit';

export const getGifts = state => state.gifts.gifts;

// export const getGiftsS = createSelector(
//   [state => state.gifts.gifts, _],
//   (items, _) => {
//     return items;
//   }
// );
