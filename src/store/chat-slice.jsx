import { createSlice } from "@reduxjs/toolkit";
const chatReducer = createSlice({
    name: 'chat',
    initialState: { selectConversation: null },
    reducers: {
        setSelectConversation(state, action) {
            state.selectConversation = action.payload
        }
    }
});
export const { setSelectConversation } = chatReducer.actions;
export const chatReducerF = chatReducer.reducer;