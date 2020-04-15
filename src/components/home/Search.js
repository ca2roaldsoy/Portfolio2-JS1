import React from "react";
import PropTypes from "prop-types";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

// Searchbar
function Search({ handleInput }) {
  return (
    <InputGroup className="search">
      <FormControl
        placeholder="Search by name..."
        onChange={(e) => handleInput(e)}
        role="search-input"
      />
      <Button variant="outline-primary">Search</Button>
    </InputGroup>
  );
}

Search.propTypes = {
  handleInput: PropTypes.func.isRequired,
};

export default Search;
