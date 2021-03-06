import React from "react";
import Spinner from "react-bootstrap/Spinner";

function Loading() {
  return (
    <>
      <Spinner
        animation="border"
        variant="success"
        role="status"
        className="spinner"
      />
      <span className="sr-only">Loading...Please Wait!</span>{" "}
      {/* for screen readers */}
    </>
  );
}
export default Loading;
