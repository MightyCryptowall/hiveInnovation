import { InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchForm = ({ handleSubmit, onChange }) => {
  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        boxShadow: "3px 3px 10px 1px rgba(0,0,0,0.3)",
        mb:"1rem"
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search By Name"
        onChange={onChange}
      />
      <SearchIcon />
    </Paper>
  );
};

export default SearchForm;
