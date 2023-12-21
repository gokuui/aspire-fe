import { Spinner } from "react-bootstrap";
import "./Loader.scss";

function Loader() {
  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <Spinner animation="border" variant="primary" className="loader" />
    </div>
  );
}

export default Loader;
