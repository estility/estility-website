// src/app/store.js

import { configureStore } from '@reduxjs/toolkit';
import displayFormReducer from './reducers/display-form-reducer';

const rootReducer = {
  displayForm: displayFormReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
