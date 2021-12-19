import { Button, capitalize } from "@mui/material";
import { useContext } from "react";
import capitalizeFirstLetter from "../functions/capitalizeFirstLetter";
import { AppFormContext } from "../pages/Products";
import AppButton from "./AppButton";
import AppPicker from "./AppPicker";
import AppTextbox from "./AppTextbox";

const AppForm = ({handleCancel}) => {
  const { loading, setFormData, formData, handleSubmit, formAction, categories } = useContext(AppFormContext);

  const handleChange = (event) => {
    const target = event.target;
    setFormData((preState) => ({ ...preState, [target.name]: target.value }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <AppTextbox
        label="Name"
        id="name"
        onChange={handleChange}
        value={formData.name}
        fullWidth
      />
      <AppTextbox
        label="Amount"
        id="amount"
        type="number"
        onChange={handleChange}
        value={formData.amount}
        fullWidth
      />
     
      <AppPicker
        label="Category"
        id="category"
        onChange={handleChange}
        value={formData.category}
        items={categories}
        fullWidth
      />
      
     
    
      <div style={{ display: "flex", flex: 1, gap:"0.5rem", flexDirection: "row-reverse", marginTop:"1rem" }}>
        <AppButton label={capitalizeFirstLetter(formAction)} type="submit" loading={loading} />
        <Button variant="contained" color="info" onClick={handleCancel}>Cancel</Button>
      </div>
    </form>
  );
};

export default AppForm;
