import React from "react";
import { Button, ButtonGroup, Table } from "reactstrap";

const ProductTable = () => (
  <Table>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Amount</th>
        <th>Category</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>Mouse</td>
        <td>100</td>
        <td>Accessories</td>
        <td>
          <ButtonGroup size="sm">
            <Button color="danger" type="button">
              Delete
            </Button>
            <Button color="secondary" type="button">
              Edit
            </Button>
          </ButtonGroup>
        </td>
      </tr>
      <tr>
        <th scope="row">2</th>
        <td>Sleek Steel Ball</td>
        <td>200</td>
        <td>Baby Care</td>
        <td>
          <ButtonGroup size="sm">
            <Button color="danger" type="button">
              Delete
            </Button>
            <Button color="secondary" type="button">
              Edit
            </Button>
          </ButtonGroup>
        </td>
      </tr>
      <tr>
        <th scope="row">3</th>
        <td>Chicken</td>
        <td>100</td>
        <td>Accessories</td>
        <td>
          <ButtonGroup size="sm">
            <Button color="danger" type="button">
              Delete
            </Button>
            <Button color="secondary" type="button">
              Edit
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    </tbody>
  </Table>
);

export default ProductTable;
