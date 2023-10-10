import { createSlice } from '@reduxjs/toolkit';

interface RentModalSchema {
  isOpen: boolean;
}

const initialState:RentModalSchema = {
  isOpen: false,
};

export const rentModalSlice = createSlice({
  name: 'rentModal',
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
export const { onOpen:onRentModalOpen, onClose:onRentModalClose } = rentModalSlice.actions;

export default rentModalSlice.reducer;
