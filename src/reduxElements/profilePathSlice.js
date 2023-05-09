import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profilePath: null,
};

export const profilePathSlice = createSlice({
  name: "profilePathSlice",
  initialState,
  reducers: {
    setProfilePath: (state, action) => {
      state.profilePath = action.payload;
    },
  },
});

export const { setProfilePath } = profilePathSlice.actions;

export default profilePathSlice.reducer;
