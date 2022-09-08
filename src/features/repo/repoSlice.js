import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRepo } from "./repoAPI";

const initialState = {
  loading: false,
  user: "alimkinpark",
  data: [],
};

export const getListAsync = createAsyncThunk(
  "repo/getList",
  async (username) => {
    const response = await getRepo(username);
    // console.log('ini response', response)
    return response;
  }
);

export const repoSlice = createSlice({
  name: "repo",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getListAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getListAsync.fulfilled, (state, action) => {
        console.log(action);
        state.loading = false;
        state.data = action.payload;
      });
  },
});

export const { setUser } = repoSlice.actions;

export default repoSlice.reducer;
