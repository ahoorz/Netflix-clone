import { configureStore } from "@reduxjs/tool";
import userReducer from "../features/userSlice";

export default configureStore({
    reducer: {
       user: userReducer,

    },
});