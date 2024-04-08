import { createSlice } from "@reduxjs/toolkit";

const uiReducer = createSlice({
    name: "ui",
    initialState: { isLoading: false,theme:null },
    reducers: {
        setLoading(state, action) {
            state.isLoading = action.payload;
        },
         setTheme(state, action) {
            state.theme=action.payload
        }
    }
});
export const { setLoading,setTheme } = uiReducer.actions;
export const uiReducerF = uiReducer.reducer;