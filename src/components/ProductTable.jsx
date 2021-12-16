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
} from "@mui/material";
import fetchDataAsync from "../functions/fetchDataAsync";
import AppPagination from "./AppPagination";

const ProductTable = ({ fetchRef, handleDelete, changeToEdit }) => {
  const [page, setPage] = React.useState(0);
  const [tableData, setTableData] = useState([]);
  const rowsPerPage = 5;

  const fetchTableData = async () => {
    console.log("working");
    const { data, error } = await fetchDataAsync();
    if (!error) {
      setTableData(data);
    }
  };

  fetchRef.current = fetchTableData;

  useEffect(() => {
    fetchTableData();
  }, []);

  return (
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
          {tableData
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((data, index) => (
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
                    onClick={() => changeToEdit({id:data.id, name:data.name, amount:data.amount, category: data.category.id})}
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
            ))}
        </TableBody>
        <TableFooter>
          <AppPagination
            total={tableData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            setPage={setPage}
          />
        </TableFooter>
      </Table>
    </TableContainer>
    // <Table>
    //   <thead>
    //     <tr>
    //       <th>#</th>
    //       <th>Name</th>
    //       <th>Amount</th>
    //       <th>Category</th>
    //       <th>Actions</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr>
    //       <th scope="row">1</th>
    //       <td>Mouse</td>
    //       <td>100</td>
    //       <td>Accessories</td>
    //       <td>
    //         <ButtonGroup size="sm">
    //           <Button color="danger" type="button">
    //             Delete
    //           </Button>
    //           <Button color="secondary" type="button">
    //             Edit
    //           </Button>
    //         </ButtonGroup>
    //       </td>
    //     </tr>
    //     <tr>
    //       <th scope="row">2</th>
    //       <td>Sleek Steel Ball</td>
    //       <td>200</td>
    //       <td>Baby Care</td>
    //       <td>
    //         <ButtonGroup size="sm">
    //           <Button color="danger" type="button">
    //             Delete
    //           </Button>
    //           <Button color="secondary" type="button">
    //             Edit
    //           </Button>
    //         </ButtonGroup>
    //       </td>
    //     </tr>
    //     <tr>
    //       <th scope="row">3</th>
    //       <td>Chicken</td>
    //       <td>100</td>
    //       <td>Accessories</td>
    //       <td>
    //         <ButtonGroup size="sm">
    //           <Button color="danger" type="button">
    //             Delete
    //           </Button>
    //           <Button color="secondary" type="button">
    //             Edit
    //           </Button>
    //         </ButtonGroup>
    //       </td>
    //     </tr>
    //   </tbody>
    // </Table>
  );
};

export default ProductTable;
