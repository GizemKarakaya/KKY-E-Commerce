// src/store/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axiosInstance, { setAuthHeader, clearAuthHeader } from '../api/axiosInstance';

const initialState = {
  user: null,
  token: null,
  error: null,
  status: 'idle',
};

// LOGIN (Remember me destekli)
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const res = await axiosInstance.post('/login', {
        email: credentials.email,
        password: credentials.password,
      });

      // 🔽🔽🔽  DEĞİŞTİ: token'ı body VEYA header'dan yakala
      const name  = res.data?.name  ?? res.data?.user?.name ?? null;
      const email = res.data?.email ?? res.data?.user?.email ?? credentials.email;

      const tokenFromBody   = res.data?.token;
      // axios header isimleri lowercase gelir
      const tokenFromHeader = res.headers?.['x-auth-token'] ?? res.headers?.['authorization'];
      const token = tokenFromBody ?? tokenFromHeader ?? null;
      // 🔼🔼🔼

      // Header (Bearer YOK!)
      if (token) setAuthHeader(token);

      // Remember me ise kalıcı kaydet
      if (credentials.remember && token) {
        localStorage.setItem('token', token);
      } else {
        localStorage.removeItem('token');
      }

      return { user: { name, email }, token };
    } catch (err) {
      const msg = err?.response?.data?.message || 'Login failed';
      toast.error(msg);
      return rejectWithValue(msg);
    }
  }
);

// APP AÇILIŞINDA AUTO LOGIN
export const autoLoginByToken = createAsyncThunk(
  'auth/autoLoginByToken',
  async (_, { rejectWithValue }) => {
    const token = localStorage.getItem('token');
    if (!token) return rejectWithValue('NO_TOKEN');

    setAuthHeader(token); // Bearer yok

    try {
      const res = await axiosInstance.get('/verify');

      const userObj = res?.data?.user ?? res?.data ?? {};
      const { name, email } = userObj;

      // 🔽🔽🔽  DEĞİŞTİ: yenilenen token'ı header/body'den al
      const newToken =
        res.headers?.['x-auth-token'] ??
        res.headers?.['authorization'] ??
        res.data?.token ??
        token;
      // 🔼🔼🔼

      if (newToken) {
        localStorage.setItem('token', newToken);
        setAuthHeader(newToken);
      }

      return { user: { name, email }, token: newToken };
    } catch (err) {
      localStorage.removeItem('token');
      clearAuthHeader();
      return rejectWithValue(err?.response?.status || 'UNAUTHORIZED');
    }
  }
);

// LOGOUT aynı kalsın...
export const logout = createAsyncThunk('auth/logout', async () => {
  localStorage.removeItem('token');
  clearAuthHeader();
  return null;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading'; state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user || null;
        state.token = action.payload.token || null;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Login failed';
        state.user = null;
        state.token = null;
        localStorage.removeItem('token');
        clearAuthHeader();
      })
      .addCase(autoLoginByToken.pending, (state) => {
        state.status = 'checking'; state.error = null;
      })
      .addCase(autoLoginByToken.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload.user || null;
        state.token = action.payload.token || null;
      })
      .addCase(autoLoginByToken.rejected, (state) => {
        state.status = 'idle'; state.user = null; state.token = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.status = 'idle'; state.user = null; state.token = null; state.error = null;
      });
  },
});

export default authSlice.reducer;
export const selectAuth = (s) => s.auth;
export const selectUser = (s) => s.auth.user;
export const selectAuthStatus = (s) => s.auth.status;
export const selectAuthError = (s) => s.auth.error;
