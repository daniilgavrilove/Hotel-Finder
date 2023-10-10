import { createSlice } from '@reduxjs/toolkit';

interface LoginModalSchema {
  isOpen: boolean;
}

const initialState:LoginModalSchema = {
  isOpen: false,
};

export const loginModalSlice = createSlice({
  name: 'loginModal',
  initialState,
  reducers: {
      onOpen: (state) => {
      state.isOpen = true;
    },

    onClose:(state)=> {
      state.isOpen = false;
    },

  },
});
export const { onOpen:onLoginModalOpen, onClose:onLoginModalClose } = loginModalSlice.actions;

export default loginModalSlice.reducer;
