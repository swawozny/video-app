import React from "react";
import {Col} from "reactstrap";

type Props = {
    title: string;
    description: string;
};

const Header: React.FC<Props> = ({title, description}) => {
    return (
        <Col>
            <h2 className="text-primary">{title}</h2>
            <p>{description}</p>
        </Col>
    );
};

export default Header;
