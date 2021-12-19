import * as api from "../api";

const loginAsync = async (formData) => {
  try {
    const response = await api.auth.logIn(formData);

    if (response.status === 200) {
        
        return {data:response.data, error:""}
    }else{

        throw Error("something went wrong");
    }

   
  } catch (error) {
    console.log(error);
    return {data: null, error: "Please check your credentials and retry!" };
  }
};

export default loginAsync;
