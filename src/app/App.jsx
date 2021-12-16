import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Anagram from "../pages/Anagram";
import Main from "../pages/Main";
import Products from "../pages/Products";
import Layout from "./Layout";
import { ThemeContext, ThemeContextProvider } from "../context/themeContext";
import { useContext } from "react";
import { CssBaseline } from "@mui/material";

const App = () => {


  const {getTheme} = useContext(ThemeContext);


  return (
    
      <ThemeProvider theme={getTheme()}>
        <CssBaseline/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Main />} />
              <Route path="/products" element={<Products />} />
              <Route path="/anagram" element={<Anagram />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
  
  );
};

export default App;
