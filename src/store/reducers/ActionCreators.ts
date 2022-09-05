import {AppDispatch} from "../store";
import axios from "axios";
import {IUser} from "../../models/IUser";
import {userSlice} from "./UserSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";


//basic action

// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.userFetching())
//         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//         dispatch(userSlice.actions.userFetchingSuccess(response.data))
//     } catch (e: any) {
//         dispatch(userSlice.actions.userFetchingError(e.message))
//     }
// }

//thunk

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_, thunkApi) => {

        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
            return response.data
        } catch(e) {
            return thunkApi.rejectWithValue(`Failed to load users`)
        }


    }
)