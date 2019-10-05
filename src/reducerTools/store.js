import reducer from "./reducer";

import { createStore } from "redux";

const initialState = { tools: [] };

export const store = createStore(reducer, initialState);
