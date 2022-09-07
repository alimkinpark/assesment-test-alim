import React, { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

function FormComponent({ loading, username, onChange, onClick }) {
  // const [username, setUsername] = useState("");
  // const [loading, setLoading] = useState(false);

  // const clickHandler = async () => {
  //   setLoading(true);
  //   const url = `https://api.github.com/users/${username}/repos`;
  //   const response = await fetch(url);
  //   let commits = await response.json();
  //   console.log(commits);
  //   setLoading(false);
  // };

  return (
    <>
      <InputGroup className="my-3">
        <Form.Control
          placeholder="Username Github"
          aria-label="Username Github"
          aria-describedby="basic-addon2"
          defaultValue={username}
          onChange={(e) => onChange(e)}
        />
        <Button
          variant="outline-primary"
          disabled={loading}
          id="button-addon2"
          onClick={(e) => onClick(e)}
        >
          {loading ? "Searching..." : "Search"}
        </Button>
      </InputGroup>
    </>
  );
}

export default FormComponent;
