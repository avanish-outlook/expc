import { createSlice } from '@reduxjs/toolkit';

const dataLoadingCases = ['pending', 'fulfilled', 'rejected']
const initialState = {
    themeColor: 'dark', // dark | light

};

const AppSettingSlice = createSlice({
    name: 'AppSettings',
    initialState: initialState,
    reducers: {

        changeTheme(state, action) {
            return { ...state, themeColor: action.payload }
        }

    },

});



export const AppSettingSliceActions = AppSettingSlice.actions;

export const AppSettingSliceSelectors = {
    selectTheme: (state) => state.AppSettings.themeColor,

}


export default AppSettingSlice.reducer;
