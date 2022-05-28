import { AuthAction } from '../interfaces/actiontype';
import * as types from '../actions/types'
const initialState: initialState = {
  passwordErr: {},
  validateMember: {},
  permissions: []
};

interface initialState {
  passwordErr: {};
  validateMember: {};
  permissions: never[];
}

export const authReducer = (state: initialState = initialState, { type, payload }: AuthAction) => {
  switch (type) {
    case types.LOGIN_USER:
      return {
        ...state,
        passwordErr: payload
      };
    case types.MEMBER_REGISTER:
      return {
        ...state,
        validateMember: payload
      };
    case types.FORGOT_PASSWORD: {
      return state;
    }
    default:
      return state
  }
}