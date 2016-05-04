/* @flow */
import { connect } from 'react-redux'
import type { HeaderStateObject } from '../interfaces/header'

// ------------------------------------
// Constants
// ------------------------------------
export const TOGGLE_NAV = 'TOGGLE_NAV'

// ------------------------------------
// Actions
// ------------------------------------

/*  NOTE: "Action" is a Flow interface defined in https://github.com/TechnologyAdvice/flow-interfaces
    If you're unfamiliar with Flow, you are completely welcome to avoid
    annotating your code, but if you'd like to learn more you can
    check out: flowtype.org.

    NOTE: There is currently a bug with babel-eslint where a `space-infix-ops`
    error is incorrectly thrown when using arrow functions, hence the oddity.  */

export function toggle (): Action {
  return {
    type: TOGGLE_NAV
  }
}


export const actions = {
  toggle
}

// ------------------------------------
// Action Handlers
// ------------------------------------


const ACTION_HANDLERS = {
  [TOGGLE_NAV]: (state: HeaderStateObject, action): HeaderStateObject => {
    return state.open != false ? ({ ...state, open:false}) : ({ ...state, open:true})
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {open: false}
export function headerReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
