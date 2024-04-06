import { configureStore } from "@reduxjs/toolkit";
import { uiReducerF } from "./ui-slice";
const store = configureStore({
    reducer: {
     ui:uiReducerF   
    }
})
export default store;