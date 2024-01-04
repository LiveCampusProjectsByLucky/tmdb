import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthI } from "../../types/auth";

const initialState: AuthI = {
  api_key: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.api_key = action.payload;
    },
    logout: (state) => {
      state.api_key = null;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { login, logout, setLoading, setError } = authSlice.actions;

export const authReducer = authSlice.reducer;
