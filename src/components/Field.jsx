import { FormGroup, Input, Label } from "reactstrap";

const Field = ({ label, name, id, placeholder, type, value, onChange }) => (
  <FormGroup>
    <Label for={id}>{label}</Label>
    <Input
      value={value}
      onChange={onChange}
      id={id}
      name={name}
      placeholder={placeholder}
      type={type}
    />
  </FormGroup>
);

export default Field;
