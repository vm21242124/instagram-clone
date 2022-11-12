import {legacy_createStore as createStore} from 'redux'
import { Reducers } from '../Reducer/Reducer'
export const mystore=createStore(Reducers);