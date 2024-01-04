import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API = `${process.env.BACKEND_API}/events`;

export const fetchEvents = createAsyncThunk("events/fetchEvents", async () => {
  const response = await axios.get(API);
  return response.data.events;
});

export const addEventAsync = createAsyncThunk(
  "events/addEventAsync",
  async (newEvent) => {
    const response = await axios.post(API, newEvent);
    return response.data.event;
  }
);

export const updateEventAsync = createAsyncThunk(
  "events/updateEventAsync",
  async ({ id, updatedEvent }) => {
    const response = await axios.post(`${API}/${id}`, updatedEvent);
    return response.data;
  }
);

export const deleteEventAsync = createAsyncThunk(
  "events/deleteEventAsync",
  async (id) => {
    const response = await axios.delete(`${API}/${id}`);
    return response.data;
  }
);

const initialState = {
  events: [],
  status: "idle",
  error: null,
  filterQuery: "",
};

export const eventsSlice = createSlice({
  name: "events",
  initialState,
  reducers: {
    updatedQuery: (state, action) => {
      state.filterQuery = action.payload;
    },
  },
  extraReducers: {
    [fetchEvents.pending]: (state) => {
      state.status = "loading";
    },
    [fetchEvents.fulfilled]: (state, action) => {
      state.status = "success";
      state.events = action.payload;
    },
    [fetchEvents.rejected]: (state, action) => {
      state.status = "error";
      console.log(action.error.message);
      state.error = action.error.message;
    },
    [addEventAsync.pending]: (state) => {
      state.status = "loading";
    },
    [addEventAsync.fulfilled]: (state, action) => {
      state.status = "success";
      state.events.push(action.payload);
    },
    [addEventAsync.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [updateEventAsync.pending]: (state) => {
      state.status = "loading";
    },
    [updateEventAsync.fulfilled]: (state, action) => {
      const updatedEvent = action.payload;
      const index = state.events.findIndex(
        ({ _id }) => _id === updatedEvent._id
      );
      state.status = "success";
      if (index !== -1) {
        state.events[index] = updatedEvent;
      }
    },
    [updateEventAsync.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
    [deleteEventAsync.pending]: (state) => {
      state.status = "loading";
    },
    [deleteEventAsync.fulfilled]: (state, action) => {
      state.status = "success";
      state.events = state.events.filter(({ _id }) => _id !== action.payload);
    },
    [deleteEventAsync.rejected]: (state, action) => {
      state.status = "error";
      state.error = action.error.message;
    },
  },
});

export const { updatedQuery } = eventsSlice.actions;

export default eventsSlice.reducer;
