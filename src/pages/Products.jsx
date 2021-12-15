import { useState } from "react";
import { Button } from "reactstrap";
import ProductModal from "../components/ProductModal";
import ProductTable from "../components/ProductTable";

const Products = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Products</h1>
        <Button onClick={() => setOpen(true)} type="button" color="primary">
          Add New Product
        </Button>
      </div>
      <ProductTable />
      <ProductModal
        title="New Product"
        isOpen={isOpen}
        toggle={() => setOpen(!isOpen)}
      />
    </div>
  );
};

export default Products;
