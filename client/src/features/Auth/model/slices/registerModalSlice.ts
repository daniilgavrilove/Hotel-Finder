import { createSlice } from '@reduxjs/toolkit';

interface RegisterModalSchema {
  isOpen: boolean;
}

const initialState:RegisterModalSchema = {
  isOpen: false,
};

export const registerModalSlice = createSlice({
  name: 'registerModal',
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
export const { onOpen:onRegisterModalOpen, onClose:onRegisterModalClose } = registerModalSlice.actions;

export default registerModalSlice.reducer;
