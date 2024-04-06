import { configureStore } from "@reduxjs/toolkit";
import { uiReducerF } from "./ui-slice";
import { chatReducerF } from "./chat-slice";
const store = configureStore({
    reducer: {
        ui: uiReducerF,
        chat: chatReducerF
    }
})
export default store;