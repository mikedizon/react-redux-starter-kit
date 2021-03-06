import React from 'react'
import ReactDOM from 'react-dom'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Router, useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import createStore from './store/createStore'
import { Provider } from 'react-redux'

const MOUNT_ELEMENT = document.getElementById('root')

// set up material-ui
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {cyan500} from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

// react-tap temporary fix
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


// Configure history for react-router
const browserHistory = useRouterHistory(createBrowserHistory)({
  basename: __BASENAME__
})

// Create redux store and sync with react-router-redux. We have installed the
// react-router-redux reducer under the key "router" in src/routes/index.js,
// so we need to provide a custom `selectLocationState` to inform
// react-router-redux of its location.
const store = createStore(window.__INITIAL_STATE__, browserHistory)
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState: (state) => state.router
})


const muiTheme = getMuiTheme();

let render = (key = null) => {
  const routes = require('./routes/index').default(store)
  const App = (
    <MuiThemeProvider muiTheme={muiTheme}>
      <Provider store={store}>
        <div>
          <Router history={history} children={routes} key={key} />
        </div>
      </Provider>
    </MuiThemeProvider>
  )
  ReactDOM.render(App, MOUNT_ELEMENT)
}

// Enable HMR and catch runtime errors in RedBox
// This code is excluded from production bundle
if (__DEV__ && module.hot) {
  const renderApp = render
  const renderError = (error) => {
    const RedBox = require('redbox-react')

    ReactDOM.render(<RedBox error={error} />, MOUNT_ELEMENT)
  }
  render = () => {
    try {
      renderApp(Math.random())
    } catch (error) {
      renderError(error)
    }
  }
  module.hot.accept(['./routes/index'], () => render())
}

// Use Redux DevTools chrome extension
if (__DEBUG__) {
  if (window.devToolsExtension) window.devToolsExtension.open()
}

render()
