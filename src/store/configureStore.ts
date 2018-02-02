import {applyMiddleware, compose, createStore} from "redux"
import {rootReducer} from "./reducers"

declare const window: {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
}
declare const process: {
    env: {
        NODE_ENV: "production"|"development"
    }
}

export const configureStore = () => {
    const middlewares = []

    const composeEnhancers =
        process.env.NODE_ENV !== "production"
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
                ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
                : compose
            : compose

    const enhancer = composeEnhancers(applyMiddleware(...middlewares))

    return createStore(rootReducer, {} as any, enhancer)
}