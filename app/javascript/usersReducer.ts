import {
  SIGNUP_USER,
  USER_SUCCESS,
  USER_ERRORS,
  USER_FAILURE,
} from './actions/user/actionConstants';

interface User {
  
}

interface UserState {
  isLoading: boolean;
  error: string;
  errors: string[];
  user: User;
  loggedIn: boolean;
}

// 定义 action 的类型
type UserAction =
  | { type: typeof SIGNUP_USER }
  | { type: typeof USER_SUCCESS; payload: { user: User } }
  | { type: typeof USER_ERRORS; payload: { errors: string[] } }
  | { type: typeof USER_FAILURE; payload: string };

const initialState: UserState = {
  isLoading: false,
  error: '',
  errors: [],
  user: {},
  loggedIn: false,
};

const userReducer = (state: UserState = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case SIGNUP_USER:
      return { ...state, isLoading: true };

    case USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        loggedIn: true,
      };

    case USER_ERRORS:
      return { ...state, isLoading: false, errors: action.payload.errors };

    case USER_FAILURE:
      return { ...state, isLoading: false, error: action.payload };

    default:
      return state;
  }
};

export default userReducer;
