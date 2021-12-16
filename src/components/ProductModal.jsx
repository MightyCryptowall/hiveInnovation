import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide } from "@mui/material"
import { forwardRef } from "react";
import AppForm from "./AppForm";
import Field from "./Field";
import SelectField from "./SelectField";

const options = [
  { label: "Category A", value: 1 },
  { label: "Category B", value: 2 },
  { label: "Category C", value: 3 },
];

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProductModal = ({ open, toggle, title }) => {
  return(
    <Dialog
    open={open}
    TransitionComponent={Transition}
    keepMounted
    onClose={toggle}
    aria-describedby="alert-dialog-slide-description"
    sx={{
      top:"-50%"
    }}
  >
    <DialogTitle>Create</DialogTitle>
    <DialogContent>
      {/* <DialogContentText id="alert-dialog-slide-description">
        Let Google help apps determine location. This means sending anonymous
        location data to Google, even when no apps are running.
      </DialogContentText> */}
      <AppForm handleCancel={toggle}/>
    </DialogContent>
    {/* <DialogActions>
      <Button>Disagree</Button>
      <Button >Agree</Button>
    </DialogActions> */}
  </Dialog>
  // <Modal isOpen={isOpen}>
  //   <ModalHeader toggle={toggle}>{title}</ModalHeader>
  //   <ModalBody>
  //     <Form>
  //       <Field
  //         label="Name"
  //         id="name"
  //         name="name"
  //         type="text"
  //         placeholder="Enter product name"
  //       />
  //       <Field
  //         label="Amount"
  //         id="amount"
  //         name="amount"
  //         type="number"
  //         placeholder="Enter product value"
  //       />
  //       <SelectField
  //         label="Category"
  //         name="category"
  //         id="category"
  //         placeholder="Select a category"
  //         options={options}
  //       />
  //     </Form>
  //   </ModalBody>
  //   <ModalFooter>
  //     <Button color="primary" type="submit">
  //       Submit
  //     </Button>{" "}
  //     <Button onClick={toggle} type="button">
  //       Cancel
  //     </Button>
  //   </ModalFooter>
  // </Modal>
)};

export default ProductModal;
