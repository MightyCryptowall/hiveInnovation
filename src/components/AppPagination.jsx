import { Box, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

const AppPagination = ({ total, page, rowsPerPage, setPage }) => {
  const theme = useTheme();
  const totalPages = Math.ceil(total / rowsPerPage);

  const handleBackButtonClick = (event) => {
    setPage((preState) => (preState - 1 === -1 ? preState : preState - 1));
  };

  const handleNextButtonClick = (event) => {
    setPage((preState) => (preState + 1 === totalPages ? preState : preState + 1));
  };

  return (

    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <span>{page+1}/{totalPages}</span>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page === totalPages-1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
    </Box>
  );
};

export default AppPagination;
