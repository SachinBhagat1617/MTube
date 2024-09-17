import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addChatMessage: (state, action) => {
      if (state.messages.length >= OFFSET_LIVE_CHAT) {
        state.messages.splice(0, 1); // Remove the first message
      }
      state.messages.push(action.payload);
    },
  },
});

export const { addChatMessage } = chatSlice.actions;
export default chatSlice.reducer;
