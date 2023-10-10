import {isRejectedWithValue, Middleware, MiddlewareAPI} from "@reduxjs/toolkit";
import toast from "react-hot-toast";



export const rtkQueryErrorLogger: Middleware =
    (api: MiddlewareAPI) => (next) => (action) => {
        // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these matchers!
        if (isRejectedWithValue(action)) {
            console.log(action)
            toast.error(  action.payload.data.message )
        }

        return next(action)
    }