import React from "react";
import "./Form.css";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Form1() {
  const [blog, setBlog] = useState({});
  const Navigate = useNavigate();
  useEffect(() => {});

  let submitHandler = (e) => {
    e.preventDefault();
    axios.post("/blogs", blog).then(() => {
      Navigate("/blog");
    });
  };

  return (
    <div className="Form">
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Img</Form.Label>
          <Form.Control
            type="url"
            onChange={(e) => {
              setBlog({ ...blog, img: e.target.value });
            }}
            name="img"
            placeholder="img"
            width={"600px"}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Author</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => {
              setBlog({ ...blog, author: e.target.value });
            }}
            name="author"
            placeholder="author"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            onChange={(e) => {
              setBlog({ ...blog, desc: e.target.value });
            }}
            name="desc"
            as="textarea"
            rows={3}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          SUBMIT
        </Button>
      </Form>
    </div>
  );
}

export default Form1;
