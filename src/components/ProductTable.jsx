import React, { useEffect, useRef, useState } from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  TablePagination,
  TableFooter,
  LinearProgress,
} from "@mui/material";
import fetchDataAsync from "../functions/fetchDataAsync";
import AppPagination from "./AppPagination";
import SearchForm from "./SearchForm";
import * as api from "../api";

const ProductTable = ({ fetchRef, handleDelete, changeToEdit }) => {
  const [page, setPage] = React.useState(0);
  const [tableData, setTableData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(false);
  const rowsPerPage = 5;

  const fetchTableData = async () => {
    setLoading(true);
    const { data, error } = await fetchDataAsync(api.product.fetch);
    if (!error) {
      setTableData(data);
      setFilterData(data);
    }
    setLoading(false);
  };

  fetchRef.current = fetchTableData;

  useEffect(() => {
    fetchTableData();
  }, []);

  const handleSearch = (e) => {

    const search = e.target.value;

    setPage(0);

    setFilterData(tableData.filter(data => {
      return data.name.includes(search)
    }))
    // if(!search) {
    //   setFilterData(tableData)
    // }else{
    //   setFilterData(tableData.filter(data => {
    //     return data.includes(search)
    //   }))
    // }

    // if (search && tableData.length === 0) {
    //   return tableData;
    // } else {
    //   return tableData.filter((data) => {
    //     return data.includes(search);
    //   });
    // }
  };

  const tableRow = (data) => (
    <TableRow
      key={data.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell component="th" scope="row">
        {data.id}
      </TableCell>
      <TableCell>{data.name}</TableCell>
      <TableCell>{data.amount}</TableCell>
      <TableCell>{data.category.name}</TableCell>
      <TableCell>
        <Button
          variant="contained"
          color="info"
          size="small"
          sx={{ marginRight: "0.5rem" }}
          onClick={() =>
            changeToEdit({
              id: data.id,
              name: data.name,
              amount: data.amount,
              category: data.category.id,
            })
          }
        >
          Edit
        </Button>
        <Button
          variant="contained"
          color="error"
          size="small"
          onClick={() => handleDelete(data.id)}
        >
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );

  return (
    <>
      <SearchForm onChange={handleSearch} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filterData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(tableRow)}
          </TableBody>
        </Table>

        {loading ? (
          <LinearProgress />
        ) : (
          <AppPagination
            total={filterData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            setPage={setPage}
          />
        )}
      </TableContainer>
    </>
  );
};

export default ProductTable;
