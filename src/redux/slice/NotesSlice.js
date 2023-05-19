import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  notes: null,
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {},
  },
});

export const notesAction = notesSlice.actions;

export default notesSlice.reducer;
