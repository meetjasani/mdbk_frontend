import { ValidatedAction } from '../interfaces/actiontype';
import * as types from '../actions/types'
const initialState = {
  emailError: '',
  emailAlreadyExist: '',
  validationCode: ''
};

export const validationReducer = (state = initialState, { type, payload }: ValidatedAction) => {
  switch (type) {
    case types.EMAIL_ERROR:
      return {
        ...state,
        emailError: payload
      };
    case types.EMAIL_ALREADY_EXIST:
      return {
        ...state,
        emailAlreadyExist: payload
      };
    case types.VERIFICATION_CODE:
      return {
        ...state,
        validationCode: payload
      };
    default:
      return state
  }
}