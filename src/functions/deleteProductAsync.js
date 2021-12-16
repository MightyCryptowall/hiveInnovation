import * as api from "../api";

const deleteProductAsync = async (id) => {
  try {
    const response = await api.product.remove(id);

    console.log(response);

    if (response.status === 204) {
        return {error:""}
    }else{

        throw Error("something went wrong");
    }

   
  } catch (error) {
    console.log(error);
    return {error: "Please check your credentials and retry!" };
  }
};

export default deleteProductAsync;
