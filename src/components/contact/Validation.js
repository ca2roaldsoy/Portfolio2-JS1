import React from "react";
import PropTypes from "prop-types";
import { Alert } from "react-bootstrap";

// Contact input validation
// if correct display message
function Validation({ validated }) {
  if (validated) {
    return (
      <>
        <Alert variant="success" className="verified">
          <Alert.Heading>Thank You :)</Alert.Heading>
        </Alert>
      </>
    );
  }

  return null;
}

Validation.propTypes = {
  validated: PropTypes.bool.isRequired,
};

export default Validation;
