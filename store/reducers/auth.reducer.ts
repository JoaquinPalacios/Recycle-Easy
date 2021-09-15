import { SIGNUP } from "../actions/auth.action";

const INITIAL_STATE = {
  token: null,
  userId: null,
};

const AuthReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
      };
    default:
      return state;
  }
}

export default AuthReducer;