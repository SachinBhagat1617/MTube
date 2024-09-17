import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import CacheSlice from "./CacheSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    cache: CacheSlice,
    chat: chatSlice,
  },
});

export default store;
