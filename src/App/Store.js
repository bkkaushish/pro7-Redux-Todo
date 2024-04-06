
import {configureStore}from "@reduxjs/toolkit"
import reducers from "../Features/Todo/TodoSlice"
export const Store = configureStore({
    reducer:reducers
})