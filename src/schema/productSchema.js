import * as Yup from "yup";

const productSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    amount: Yup.number().required("Required"),
    category: Yup.number(),
})

export default productSchema;