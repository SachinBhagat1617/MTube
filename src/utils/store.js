import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import CacheSlice from "./CacheSlice";

const store = configureStore({
  reducer: {
        app: appSlice,
        cache:CacheSlice,
  },
});

export default store;
