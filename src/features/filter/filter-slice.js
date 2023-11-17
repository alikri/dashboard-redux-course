import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: '@@filter',
  initialState: [],
  reducers: {
    addFilter: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
    },
    deleteFilter: (state, action) => {
      return state.filter((item) => item !== action.payload);
    },
    clearFilter: () => [],
  },
});


export const { addFilter, deleteFilter, clearFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

export const selectFilters = (state) => state.filters;