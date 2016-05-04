import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import { headerReducer as header } from '../modules/header'

export const reducers = (asyncReducers) => {
  return combineReducers({
    // Add sync reducers here
    header,
    router,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  store.asyncReducers[key] = reducer
  store.replaceReducer(reducers(store.asyncReducers))
}

export default reducers
