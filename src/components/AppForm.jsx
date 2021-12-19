import { Button, capitalize } from "@mui/material";
import { useContext } from "react";
import capitalizeFirstLetter from "../functions/capitalizeFirstLetter";
import { AppFormContext } from "../pages/Products";
import AppButton from "./AppButton";
import AppPicker from "./AppPicker";
import AppTextbox from "./AppTextbox";
import { Formik, FormikHelpers, FormikProps } from "formik";
import productSchema from "../schema/productSchema";

const AppForm = ({handleCancel}) => {
  const { formData, handleSubmit, formAction, categories, formRef } = useContext(AppFormContext);

 
  return (
    <Formik
      initialValues={formData}
      validationSchema={productSchema}
      onSubmit={handleSubmit}
      innerRef={formRef}
    >
      {
        formik => (
          <form onSubmit={formik.handleSubmit}>
          <AppTextbox
            label="Name"
            id="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            error={formik.errors.name}
            fullWidth
          />
          <AppTextbox
            label="Amount"
            id="amount"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formData.amount}
            error={formik.errors.amount}
            fullWidth
          />
         
          <AppPicker
            label="Category"
            id="category"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formData.category}
            error={formik.errors.category}
            items={categories}
            fullWidth
          />
          
         
        
          <div style={{ display: "flex", flex: 1, gap:"0.5rem", flexDirection: "row-reverse", marginTop:"1rem" }}>
            <AppButton label={capitalizeFirstLetter(formAction)} type="submit" loading={formik.isSubmitting} />
            <Button variant="contained" color="info" onClick={handleCancel}>Cancel</Button>
          </div>
        </form>
        )
      }
    
    </Formik>
  );
};

export default AppForm;
