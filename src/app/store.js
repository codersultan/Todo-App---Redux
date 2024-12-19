import { configureStore } from "@reduxjs/toolkit";

// create redux store
const store = configureStore({
  reducer: {},
  middleware: (getDefualtMiddleware) => getDefualtMiddleware(),
  devTools: true,
});

// export default
export default store;
