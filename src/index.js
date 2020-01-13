import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { store, persist } from './redux/store'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persist} loading={<h1>loading</h1>}>
      <App />
    </PersistGate>
  </Provider>
  , document.getElementById('root'))
