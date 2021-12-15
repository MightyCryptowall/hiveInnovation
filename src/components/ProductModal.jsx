import {
  Button,
  Form,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import Field from "./Field";
import SelectField from "./SelectField";

const options = [
  { label: "Category A", value: 1 },
  { label: "Category B", value: 2 },
  { label: "Category C", value: 3 },
];

const ProductModal = ({ isOpen, toggle, title }) => (
  <Modal isOpen={isOpen}>
    <ModalHeader toggle={toggle}>{title}</ModalHeader>
    <ModalBody>
      <Form>
        <Field
          label="Name"
          id="name"
          name="name"
          type="text"
          placeholder="Enter product name"
        />
        <Field
          label="Amount"
          id="amount"
          name="amount"
          type="number"
          placeholder="Enter product value"
        />
        <SelectField
          label="Category"
          name="category"
          id="category"
          placeholder="Select a category"
          options={options}
        />
      </Form>
    </ModalBody>
    <ModalFooter>
      <Button color="primary" type="submit">
        Submit
      </Button>{" "}
      <Button onClick={toggle} type="button">
        Cancel
      </Button>
    </ModalFooter>
  </Modal>
);

export default ProductModal;
