import { Button, CircularProgress } from "@mui/material";

const AppButton = ({
  label,
  type = "button",
  variant = "contained",
  loading = false,
}) => {
  return (
    <Button type={type} variant="contained" disabled={loading}>
      {loading ? (
        <>
          <CircularProgress color="primary" size={15} /> &nbsp; {label}
        </>
      ) : (
        <>{label}</>
      )}
    </Button>
  );
};

export default AppButton;
