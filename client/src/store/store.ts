import { ConfigureStoreOptions, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import postReducer from "./reducers/postReducer";
//đi tạo kho
const store = configureStore({
    reducer: {
        userReducer,
        postReducer
    }
})
// xuất kho
export default store;