import React from "react";
import {Alert, Col} from "reactstrap";

type Props = {
    videoAdded: boolean | null;
};

const AlertBox: React.FC<Props> = ({videoAdded}) => {
    const getAlertColor = (): string => {
        if (videoAdded) {
            return "success";
        }
        return "danger";

    };

    const getAlertText = () => {
        if (videoAdded) {
            return "The video has been successfully added to the saved.";
        }
        return "The link provided is not valid!";

    };

    if (videoAdded === null) {
        return null;
    }

    return (
        <Col>
            <Alert color={getAlertColor()}>
                {getAlertText()}
            </Alert>
        </Col>
    );
};

export default AlertBox;
