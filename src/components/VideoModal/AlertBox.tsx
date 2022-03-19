import React from "react";
import {Alert, Container} from "reactstrap";
import {ExclamationTriangleFill} from "react-bootstrap-icons";

const AlertBox = () => {
    return (
        <Container className="d-flex justify-content-center align-items-center">
            <Alert color="danger">
                <h4 className="d-flex align-items-center">
                    <ExclamationTriangleFill className="me-2"/> Error
                </h4>
                <p>Sorry, there is a problem with the movie player. Try again.</p>
            </Alert>
        </Container>
    );
};

export default AlertBox;
