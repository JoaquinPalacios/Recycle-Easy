import { LOGIN, SIGNUP } from "../actions/auth.action";

const INITIAL_STATE = {
  token: null,
  userId: null,
  data: null,
};

const AuthReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
      };
    case LOGIN:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
}

export default AuthReducer;