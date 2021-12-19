import { createContext, useEffect, useRef, useState } from "react";
import { Button } from "@mui/material";
import ProductModal from "../components/ProductModal";
import ProductTable from "../components/ProductTable";
import useAuthGuard from "../hooks/useAuthGuard";
import createProductAsync from "../functions/createProductAsync";
import deleteProductAsync from "../functions/deleteProductAsync";
import editProductAsync from "../functions/editProductAsync";
import fetchDataAsync from "../functions/fetchDataAsync";
import * as api from "../api";

export const AppFormContext = createContext();

const defaultFormValue = {
  name: "",
  amount: 0,
  category: 1,
};

const Products = () => {
  useAuthGuard();

  const [isOpen, setOpen] = useState(false);
  const [formData, setFormData] = useState(defaultFormValue);
  const [loading, setLoading] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formAction, setFormAction] = useState("create");
  const [categories, setCategories] = useState([]);

  const fetchRef = useRef();
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    let response;
    switch (formAction) {
      case "create":
        response = await createProductAsync(formData);
        break;
      case "edit":
        response = await editProductAsync(editId, formData);
        break;
      default:
        break;
    }

    refetchData();
    setLoading(false);
    setFormData(defaultFormValue);
    setFormAction("create");
    setOpen(false);
  };

  const refetchData = (fetchTableData) => {
    fetchRef.current();
  };

  const changeToEdit = async (editDto) => {
    setEditId(editDto.id);
    setFormData({
      name: editDto.name,
      amount: editDto.amount,
      category: editDto.category,
    });
    setFormAction("edit");
    setOpen(true);
  };

  const fetchCategories = async () => {
    const {data, error} = await fetchDataAsync(api.category.fetch);

    if(!error){
      console.log(data);
      setCategories(data);
    }
  }

  useEffect(() => {
    fetchCategories();
  },[])

  const handleDelete = async (id) => {
    const { error } = await deleteProductAsync(id);
    refetchData();
  };

  return (
    <AppFormContext.Provider
      value={{
        formData,
        setFormData,
        loading,
        setLoading,
        handleSubmit,
        formAction,
        categories,
      }}
    >
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Products</h1>
        <Button
          onClick={() => setOpen(true)}
          type="button"
          variant="contained"
          color="primary"
        >
          Add New Product
        </Button>
      </div>
      <ProductTable
        fetchRef={fetchRef}
        changeToEdit={changeToEdit}
        handleDelete={handleDelete}
      />
      <ProductModal
        title="New Product"
        open={isOpen}
        toggle={() => setOpen(!isOpen)}
      />
    </AppFormContext.Provider>
  );
};

export default Products;
