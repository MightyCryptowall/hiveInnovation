import { Alert, Col, Form, Row } from "reactstrap";
import { useState } from "react";
import Field from "../components/Field";
import { checkAnagram } from "../utils/Utils";

const Anagram = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");

  const isAnagram = checkAnagram(first, second);

  return (
    <div>
      <Form>
        <Row>
          <Col>
            <Field
              value={first}
              onChange={(e) => setFirst(e.target.value)}
              name="first"
              label="First word"
              placeholder="Enter your first word"
            />
          </Col>
          <Col>
            <Field
              value={second}
              onChange={(e) => setSecond(e.target.value)}
              name="second"
              label="Second word"
              placeholder="Enter your second word"
            />
          </Col>
        </Row>
      </Form>
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
