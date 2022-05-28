// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import { authReducer } from './authReducer';
import { validationReducer } from './validationReducer';
import { clientReducer } from './clientReducer';


const rootReducer = combineReducers({
    auth: authReducer,
    validation: validationReducer,
    client: clientReducer
})

export default rootReducer

export type State = ReturnType<typeof rootReducer>
