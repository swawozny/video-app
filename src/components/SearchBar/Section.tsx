import React from "react";
import {Col} from "reactstrap";

type Props = {
    title: string;
    description: string;
    icon: JSX.Element;
};

const Section: React.FC<Props> = ({title, description, icon}) => {
    return (
        <Col>
            <h4>
                {icon}
                {title}
            </h4>
            <p>{description}</p>
        </Col>
    );
};

export default Section;
