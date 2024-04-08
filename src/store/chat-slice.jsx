import { createSlice } from "@reduxjs/toolkit";
const chatReducer = createSlice({
    name: 'chat',
    initialState: { selectConversation: null,messages:[] },
    reducers: {
        setSelectConversation(state, action) {
            state.selectConversation = action.payload
        },
        setMessage(state, action) {
            state.messages = action.payload;
        }
    }
});
export const { setSelectConversation,setMessage } = chatReducer.actions;
export const chatReducerF = chatReducer.reducer;