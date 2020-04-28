import { createStore, applyMiddleware, compose } from 'redux'
import { wrapStore } from 'webext-redux'
import { configureApp } from './AppConfig'
import reducers, { loadState } from './store'
import thunk from 'redux-thunk'

const preloadedState = loadState()
const store = createStore(reducers, preloadedState, applyMiddleware(thunk))

configureApp(store)
wrapStore(store)
