// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from './reducers'; // Import your root reducer

// const store = configureStore({
//     reducer: rootReducer,
//     // Add any middleware or enhancers if needed
// });

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './reducers/dataSlice';

const store = configureStore({
    reducer: {
        data: dataReducer,
    },
});

export default store;