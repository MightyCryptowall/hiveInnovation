import * as api from "../api";

const editProductAsync = async (editId, formData) => {
  try {
    const response = await api.product.edit(editId, formData);

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

export default editProductAsync;
