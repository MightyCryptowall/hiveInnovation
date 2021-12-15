import { FormGroup, Input, Label } from "reactstrap";

const SelectField = ({ label, name, id, placeholder, options }) => (
  <FormGroup>
    <Label for={id}>{label}</Label>
    <Input id={id} name={name} placeholder={placeholder} type="select">
      {options?.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </Input>
  </FormGroup>
);

export default SelectField;
