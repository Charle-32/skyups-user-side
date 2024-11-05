// Libraries
import { combineReducers } from "redux";
import createWebStorage from "redux-persist/lib/storage/createWebStorage";

// Reducers
import ticketDetailsSlice from "./slices/ticketDetailsSlice";

const createNoopStorage = () => {
    return {
        getItem() {
            return Promise.resolve(null);
        },
        setItem(_key: unknown, value: unknown) {
            return Promise.resolve(value);
        },
        removeItem() {
            return Promise.resolve();
        },
    };
};

const storage =
    typeof window !== "undefined"
        ? createWebStorage("local")
        : createNoopStorage();

const rootPersistConfig = {
    key: "root",
    storage,
    keyPrefix: "redux-",
    whitelist: [],
};

const rootReducer = combineReducers({
    ticketDetails: ticketDetailsSlice
});

export { rootPersistConfig, rootReducer };
