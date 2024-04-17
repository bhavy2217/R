import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import MainReducer from "../Reducer/CombineReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key : "data",
    storage,
};

const preducer = persistReducer(persistConfig, MainReducer);

const middleware = applyMiddleware(logger);

const store = createStore(preducer, middleware);

const persistor = persistStore(store);

export default store;
export { persistor };

