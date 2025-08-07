import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialState = {
  user: null,
  token: null,
  error: null,
  status: 'idle',
};

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('https://workintech-fe-ecommerce.onrender.com/login', credentials);
      
      // localStorage’a token'ı kaydet
      if (credentials.remember) {
        localStorage.setItem('token', response.data.token);
      }

      return response.data;
    } catch (err) {
      toast.error(err.response?.data?.message || 'Login failed');
      return rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';

        // Backend doğrudan user yerine name/email döndürüyor olabilir.
        const { name, email, token } = action.payload;
        state.user = { name, email };
        state.token = token;
        state.error = null;
})

      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
