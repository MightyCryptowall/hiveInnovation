import * as api from "../api";
import authEnums from "../enums/authEnums";
import { dispatch } from "../store";

const loginAsync = async (formData) => {
  try {
    const response = await api.auth.logIn(formData);

    if (response.status === 200) {
        console.log(response);
        dispatch({type: authEnums.LOGIN_SUCCESS, payload: response.data});
        return {error:""}
    }else{

        throw Error("something went wrong");
    }

   
  } catch (error) {
    console.log(error);
    return {error: "Please check your credentials and retry!" };
  }
};

export default loginAsync;
