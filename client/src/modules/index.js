import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import app from './app'

export default history =>
  combineReducers({
    app,
    router: connectRouter(history)
  })
