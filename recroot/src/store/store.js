import { configureStore } from "@reduxjs/toolkit";
import { volunteersSlice } from "../features/volunteers/volunteersSlice";
import { eventsSlice } from "../features/events/eventsSlice";

export default configureStore({
  reducer: {
    volunteers: volunteersSlice.reducer,
    events: eventsSlice.reducer,
  },
});
