export const getIsAuth = state => Boolean(state.auth.token);
export const getRewards = state => state.auth.rewards;
export const getBalance = state => state.auth.user.balance;
