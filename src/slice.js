import { createSlice } from '@reduxjs/toolkit';

import {
  getInitialData,
} from '../services/api';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
  },
  reducers: {
    setData(state, { payload: data }) {
      return {
        ...state,
        data,
      };
    },
  },
});

export const {
  setData,
} = actions;

export function loadInitialData() {
  return (dispatch) => {
    const data = getInitialData();

    dispatch(setData(data));
  };
}

export default reducer;
