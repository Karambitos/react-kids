export const getIsAuth = state => Boolean(state.auth.token);
export const getEmail = state => state.auth.user.email;
export const getRewards = state => state.auth.rewards;
export const getBalance = state => state.auth.user.balance;
export const getIsRefreshing = state => state.auth.isRefreshing;
