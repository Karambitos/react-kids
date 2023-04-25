import { createSelector } from '@reduxjs/toolkit';

export const getGiftsList = state => state.gifts.gifts;
export const getLastGiftBuy = state => state.gifts.lastGiftBuy;

export const getModal = state => state.gifts.modalShow;

export const getFilterGiftsList = createSelector(
  [state => state.gifts.gifts, state => state.gifts.purchasedGiftIds],
  (gifts, giftIds) => {
    return gifts.filter(item => giftIds.includes(item.id));
  }
);
