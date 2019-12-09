import thunk from 'redux-thunk'
import logger from './logger'
import {applyMiddleware } from 'redux'

//Middleware "thunk" is used for side effects.
//logger is used to log events

export default applyMiddleware(
    thunk,
    logger
)