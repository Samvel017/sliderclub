import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async function (action) {
    const users = await fetch(`https://reqres.in/api/users?page=${action}`);
    const response = await users.json();
    return response.data;
  }
);

const initialState = {
  userLogin: [],
  users: [],
  createdUsers: [],
  status: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userLogin = action.payload;
    },
    addUser: (state, action) => {
      state.createdUsers.push(action.payload);
    },
  },
  extraReducers: {
    [fetchUser.pending]: (state, action) => {
      state.status = 'pending';
      state.users = null;
    },
    [fetchUser.fulfilled]: (state, action) => {
      state.status = true;
      state.users = action.payload;
    },
    [fetchUser.rejected]: (state, action) => {
      state.status = 'error';
    },
  },
});

export const { setUser, addUser } = userSlice.actions;

export const selectUser = (state) => state.user.userLogin;
export const selectUserInfo = (state) => state.user.users;
export const selectStatus = (state) => state.user.status;
export const selectCreatedUsers = (state) => state.user.createdUsers

export default userSlice.reducer;
