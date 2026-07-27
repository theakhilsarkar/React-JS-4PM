import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { base_url } from "../utils.js";

export const signup = createAsyncThunk("auth/signup", async (user) => {
  try {
    const res = await axios.post(`${base_url}/users`, user);
    if (res.status == 201) {
      alert("Signup successfully !");
      return res.data;
    } else {
      alert("Signup failed !");
    }
  } catch (err) {
    alert(err.message);
    return err;
  }
});

export const signin = createAsyncThunk(
  "auth/signin",
  async ({ email, password }) => {
    try {
      // check user is exist in our database or not
      // password match
      const res = await axios.get(`${base_url}/users`);
      const user = res.data.find(
        (val) => val.email == email && val.password == password,
      );
      if (user) {
        alert("Signin Successfully !");
        return user;
      } else {
        alert("Signin Failed !");
        return false;
      }
    } catch (err) {
      alert(err.message);
    }
  },
);

export const editProfile = createAsyncThunk(
  "auth/profileEdit",
  async ({ id, name, address, phone, password }) => {
    try {
      const res = await axios.put(`${base_url}/users/${id}`, {
        name,
        address,
        phone,
        password,
      });
      alert("Profile updated successfully !");
      return res.data;
    } catch (err) {
      alert("Profile updation failed !");
      return false;
    }
  },
);

export const deleteProfile = createAsyncThunk(
  "auth/deleteProfile",
  async (id) => {
    try {
      const res = await axios.put(`${base_url}/users/${id}`);
      alert("Profile deleted successfully !");
      return res.data;
    } catch (err) {
      alert("Profile deletion failed !");
      return false;
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    users: [],
    currentUser: {}, // currently loggedin user
    err: null,
    isLoading: false,
  },
  extraReducers: (builder) => {
    // common cases
    // pending - loading cases
    const pendingCase = (state, action) => {
      state.isLoading = true;
    };
    // error case
    const errorCase = (state, action) => {
      state.isLoading = true;
    };

    // signup builder
    builder
      .addCase(signup.pending, pendingCase)
      .addCase(signup.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users.push(action.payload);
      })
      .addCase(signup.rejected, errorCase);

    // signin builder
    builder
      .addCase(signin.pending, pendingCase)
      .addCase(signin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
      })
      .addCase(signin.rejected, errorCase);

    // update profile builder
    builder
      .addCase(editProfile.pending, pendingCase)
      .addCase(editProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.currentUser = action.payload;
        const index = state.users.findIndex(
          (val) => val.id == action.payload.id,
        );
        state.users[index] = action.payload;
      })
      .addCase(editProfile.rejected, errorCase);

    // delete profile - by admin
    builder
      .addCase(deleteProfile.pending, pendingCase)
      .addCase(deleteProfile.fulfilled, (state, action) => {
        state.isLoading = false;

        const index = state.users.findIndex(
          (val) => val.id == action.payload.id,
        );
        state.users.splice(index, 1);
      })
      .addCase(deleteProfile.rejected, errorCase);
  },
});

export default authSlice.reducer;

// thunk function - direct named export
// reducer action - manualy export
// export const {} = authSlice.actions;
// extra reducer - no need to export - process

// reducers - its is property of slice, actions define
// extrareducer: its is property of slice, async actions define

// reducer = reducers + extrareducers
