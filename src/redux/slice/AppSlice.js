import { createSlice } from '@reduxjs/toolkit';


const initialState = {

};

const AppSlice = createSlice({
    name: 'AppSlice',
    initialState: initialState,
    reducers: {

        changeTheme(state, action) {
            return { ...state, themeColor: action.payload }
        }

    },

});



export const AppSliceActions = AppSlice.actions;

export const AppSliceSelectors = {
    // selectTheme: (state) => state.AppSettings.themeColor,

}


export default AppSlice.reducer;
