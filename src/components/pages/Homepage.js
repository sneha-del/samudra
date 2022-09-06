import React from "react";
import NavBar from "../NavBar";
import Navs from "./Navs";
import Form from "react-bootstrap/Form";
import SearchIcon from "@mui/icons-material/Search";

const Homepage = () => {
  return (
    <div>
      <NavBar />
      <div class="grid-container3">
        <div style={{ background: "#1E1E1E" }}>Library</div>
        <div
          style={{
            marginLeft: "65%",
            background: "#1E1E1E",
            
          }}
        >
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search all photos"
              className="me-2"
              aria-label="Search"
              style={{ borderRadius: "100px", background:"#1E1E1E" }}
            />{" "}
            <SearchIcon style={{ marginLeft: "-40px", marginTop: "10px" }} />
          </Form>
        </div>
      </div>
      <Navs />
    </div>
  );
};

export default Homepage;
