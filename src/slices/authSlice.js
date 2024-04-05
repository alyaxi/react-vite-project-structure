import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import auth from '../services/authService';

const initialState = {
    user: JSON.parse(localStorage?.getItem("user")) || {},
    isLoggedIn: Object.keys(JSON.parse(localStorage?.getItem("user")) || {}).length > 0 ? true : false,
}

export const registerUser = createAsyncThunk(
    "auth/registerUser",
    async (data, thunkAPI) => {
      try {
        console.log(data, "dataaaaaaaaa");
        let response = await auth.register(data);
        return response.data;
      } catch (err) {
        return thunkAPI.rejectWithValue(err);
      }
    }
);
  
export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (data, thunkAPI) => {
      try {
        console.log(data);
        let response = await auth.login(data);
        console.log(response, "response: " );
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
);
  
export const logoutUser = createAsyncThunk(
    "auth/logoutUser",
    async (data, thunkAPI) => {
        try {
            const response = await auth.logout(data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);


const authSlice  = createSlice({
    initialState,
    name: "auth",
    reducers: {
        //
    },
    // extraReducers: (builder) => {
        // builder.
        // addCase(loginUser.fulfilled, (state, action) => {
            // save user in localstorage after login
            // localStorage.setItem("user", JSON.stringify(action.payload))
        // });
    // }
});


// export const {  } = authSlice.actions;
export default authSlice.reducer;