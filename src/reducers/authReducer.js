import authEnum from "../enums/authEnums";


const authInStorage = localStorage.getItem("auth");
let currentState = authInStorage && JSON.parse(authInStorage);

const defaultState = {
  accessToken: "",
};


const initialState: authReducerState = currentState
  ? currentState
  : defaultState;

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authEnum.LOGIN_SUCCESS:
        
      state = {
        accessToken: action.payload.token,
      };

      localStorage.setItem("auth",JSON.stringify(state));
      return state;

    case authEnum.LOGOUT:
      state = { ...defaultState };

      localStorage.setItem("auth",JSON.stringify(state));
      return state;

    default:
      return state;
  }
};

export default authReducer;
