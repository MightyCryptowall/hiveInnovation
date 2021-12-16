import {
  AppBar,
  Button,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import { ThemeContext } from "../context/themeContext";

const Layout = () => {
  const navigate = useNavigate();

  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button color="inherit" onClick={() => navigate("/")}>
              Hive Innovation
            </Button>
          </Typography>
          <IconButton color="inherit" onClick={toggleTheme}>
            {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
          <Button color="inherit" onClick={() => navigate("/anagram")}>
            Anagram
          </Button>
          <Button color="inherit" onClick={() => navigate("/products")}>
            Products
          </Button>
          <Button color="inherit" onClick={() => navigate("/anagram")}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <div style={{ marginTop: "1rem" }}></div>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
