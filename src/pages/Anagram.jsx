import { Alert, Col, Form, Row } from "reactstrap";
import { useState } from "react";
import Field from "../components/Field";
import { checkAnagram } from "../utils/Utils";
import { Button, TextField } from "@mui/material";

const Anagram = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");

  const isAnagram = checkAnagram(first, second);

  console.log(isAnagram);
  return (
    <div>
      <form>
        <Row>
          <Col>
            <TextField
              id="first"
              label="First word"
              variant="outlined"
              helperText="Enter your first word"
              value={first}
              onChange={(e) => setFirst(e.target.value)}
              fullWidth
            />
          </Col>
          <Col>
          <TextField
              id="second"
              label="Second word"
              variant="outlined"
              helperText="Enter your second word"
              value={second}
              onChange={(e) => setSecond(e.target.value)}
              fullWidth
            />
          </Col>
        </Row>
      </form>
      {first && second && (
        <Alert color={isAnagram ? "success" : "danger"}>
          {isAnagram
            ? `Yes, provided 2 words are anagram.`
            : `No, provided 2 words are not anagram.`}
        </Alert>
      )}
    </div>
  );
};

export default Anagram;
