import {Container, Spinner} from "reactstrap";

import "./LoadingAlert.css";

const LoadingAlert = () => {

    return (
        <Container className="d-flex justify-content-center">
            <div className="mt-4 opacity-75 text-black text-center">
                <Spinner
                    type="border"
                    style={{width: "10rem", height: "10rem"}}
                >
                </Spinner>
                <h4 className="mt-3">
                    LOADING
                    <div className="loading">...</div>
                </h4>
            </div>
        </Container>
    );
};

export default LoadingAlert;
