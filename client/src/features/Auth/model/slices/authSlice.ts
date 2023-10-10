import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthStateSchema } from '../types/AuthStateSchema';
import { IUser } from '../types/IUser';

const initialState:AuthStateSchema = {
  user: undefined,
  isAuth: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuth: (state,action:PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setUser: (state, action:PayloadAction<IUser>) => {
      state.user = action.payload;
    },

  },
});
export const { setIsAuth, setUser } = authSlice.actions;

export default authSlice.reducer;
