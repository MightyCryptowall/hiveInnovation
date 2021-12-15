import { BrowserRouter, Route, Routes } from "react-router-dom";
import Anagram from "../pages/Anagram";
import Main from "../pages/Main";
import Products from "../pages/Products";
import Layout from "./Layout";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Products />} />
        <Route path="/anagram" element={<Anagram />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
