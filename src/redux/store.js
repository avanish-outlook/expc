import { configureStore } from '@reduxjs/toolkit';
import NotesSlice from './slice/NotesSlice.js';
import AuthSlice from './slice/AuthSlice.js';
import AppSettingSlice from './slice/AppSettingsSlice.js';
import PostsSlice from './slice/PostsSlice.js';
import Feed from './slice/FeedSlice.js';
import Reels from './slice/ReelsSlice';
import Profile from './slice/ProfileSlice.js';
export default configureStore({
  reducer: {
    Notes: NotesSlice,
    Auth: AuthSlice,
    AppSettings: AppSettingSlice,
    Posts: PostsSlice,
    Feed,
    Reels,
    Profile
  },
  devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
},);
