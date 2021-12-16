import * as api from "../api";

const createProductAsync = async (formData) => {
  try {
    const response = await api.product.create(formData);

    if (response.status === 200) {
        return {error:""}
    }else{

        throw Error("something went wrong");
    }

   
  } catch (error) {
    console.log(error);
    return {error: "Please check your credentials and retry!" };
  }
};

export default createProductAsync;
