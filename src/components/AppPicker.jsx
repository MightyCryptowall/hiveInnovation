import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import { CustomInput } from "./AppTextbox";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};




const AppPicker = ({
  id,
  label,
  value,
  onChange,
  onBlur,
  fullWidth = false,
  items,
  error,
}) => {
   
  return (
    <FormControl variant="standard" sx={{ marginY: "0.5rem" }} fullWidth={fullWidth}>
      <InputLabel shrink htmlFor="{id}">
        {label}
      </InputLabel>
      <Select
        displayEmpty
        value={value}
        name={id}
        id={id}
        onChange={onChange}
        input={<CustomInput />}
        MenuProps={MenuProps}
        onBlur={onBlur}
      >
      
        {items.map((item) => (
          <MenuItem
            key={item.id}
            value={item.id}
          >
            {item.name}
          </MenuItem>
        ))}
      </Select>
      {error && (
        <Typography variant="caption" sx={{ color: "red" }}>
          {error}
        </Typography>
      )}
    </FormControl>
  );
};

export default AppPicker;
