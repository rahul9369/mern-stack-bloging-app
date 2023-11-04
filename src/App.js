import React from "react";
import Card from "./Components/Cardlist";
import Newblog from "./Components/Form";
import Show from "./Components/Show";
import Edit from "./Components/Edit";
import Land from "./Components/Land";
import { Route, Routes, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";

function App() {
  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link to="/">
            <Button variant="secondry">Home</Button>
          </Link>
          <Nav className="me-auto">
            <Link to="/blog">
              <Button variant="secondry">Blogs</Button>
            </Link>
            <Link to="/new">
              <Button variant="secondry">Add New</Button>
            </Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Land />} />
        <Route path="/blog" element={<Card />} />
        <Route path="/new" element={<Newblog />} />
        <Route path="/blog/:id" element={<Show />} />
        <Route path="/blog/:id/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
