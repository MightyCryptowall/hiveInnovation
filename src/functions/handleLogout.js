import authEnums from "../enums/authEnums";
import { dispatch } from "../store";

const handleLogout = () => {
  dispatch({type:authEnums.LOGOUT});
};

export default handleLogout;
