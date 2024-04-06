import { createSlice } from "@reduxjs/toolkit";

const uiReducer = createSlice({
    name: "ui",
    initialState: { isLoading: false },
    reducers: {
        setLoading(state, action) {
            state.isLoading = action.payload;
        }
    }
});
export const { setLoading } = uiReducer.actions;
export const uiReducerF = uiReducer.reducer;