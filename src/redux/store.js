import { combineReducers, configureStore } from '@reduxjs/toolkit';
import NotesSlice from './slice/NotesSlice.js';
import AuthSlice from './slice/AuthSlice.js';
import AppSettingSlice from './slice/AppSettingsSlice.js';
import PostsSlice from './slice/PostsSlice.js';
import Feed from './slice/FeedSlice.js';
import Reels from './slice/ReelsSlice';
import Profile from './slice/ProfileSlice.js';


const reducers = combineReducers({
  Notes: NotesSlice,
  Auth: AuthSlice,
  AppSettings: AppSettingSlice,
  Posts: PostsSlice,
  Feed,
  Reels,
  Profile
})

export default configureStore({
  reducer: reducers,
  devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
},);
