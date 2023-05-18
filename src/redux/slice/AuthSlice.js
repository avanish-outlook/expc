import { createSlice } from '@reduxjs/toolkit';


const initialState = {

};

const AuthSlice = createSlice({
    name: 'AuthSlice',
    initialState: initialState,
    reducers: {

        changeTheme(state, action) {
            return { ...state, themeColor: action.payload }
        }

    },

});



export const AuthSliceActions = AuthSliceSlice.actions;

export const AuthSliceSelectors = {
    // selectTheme: (state) => state.AppSettings.themeColor,

}


export default AuthSlice.reducer;
