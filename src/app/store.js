import { configureStore } from '@reduxjs/toolkit';

import {cryptoApi} from '../services/cryptoApi'

 export default configureStore({
    reducer :{
      [cryptoApi.reducer] : cryptoApi.reducer,
    },
 })