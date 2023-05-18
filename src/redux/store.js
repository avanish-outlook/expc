import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./slice/AppSlice";

export default configureStore({
    reducer: {
        AppSlice
    },
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
},);
