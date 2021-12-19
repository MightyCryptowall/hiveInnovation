import { FormControl, FormHelperText, InputBase, InputLabel, Typography } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
export const CustomInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const AppTextbox = ({
  id,
  label,
  value,
  onChange,
  onBlur,
  type = "text",
  fullWidth = false,
  error,
}) => {
  return (
    <FormControl
      variant="standard"
      sx={{ marginY: "0.3rem" }}
      fullWidth={fullWidth}
    >
      <InputLabel shrink htmlFor={id}>
        {label}
      </InputLabel>
      <CustomInput
        value={value}
        id={id}
        name={id}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
      />
      {true && (
        <FormHelperText id="component-error-text" sx={{color:"red"}}>{error}</FormHelperText>
      )}
    </FormControl>
  );
};

export default AppTextbox;
