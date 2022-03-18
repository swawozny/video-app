import React from "react";
import {Alert, Col, Container} from "reactstrap";
import {ExclamationTriangleFill} from "react-bootstrap-icons";

const AlertBox = () => {

    return (
        <Container className="mt-4">
            <Col>
                <Alert color="warning">
                    <h4 className="d-flex align-items-center">
                        <ExclamationTriangleFill className="me-2"/> No saved videos.
                    </h4>
                    <hr></hr>
                    <p>
                        Please, <a
                        className="alert-link"
                        href="/"
                    >
                        add at least one!
                    </a>
                    </p>
                </Alert>
            </Col>
        </Container>
    );
};

export default AlertBox;
