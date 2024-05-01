
import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userDetails: {},
        locationDetails: {},
        token: false
    },
    reducers: {
        addUserDetails: (state, action) => {
            state.userDetails = action.payload;
        },
        removeUserDetails: (state) => {
            state.userDetails = {}
        },
        addLocation: (state, action) => {
            state.locationDetails = action.payload
        },
        setToken: (state, action) => {
            state.token = action.payload
        }
    },
});

export const { addUserDetails, removeUserDetails, addLocation, setToken } = userSlice.actions;
export default userSlice.reducer;