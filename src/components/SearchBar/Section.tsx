import React from "react";
import {Card, CardText, CardTitle, Col} from "reactstrap";

type Props = {
    title: string;
    description: string;
    icon: JSX.Element;
};

const Section: React.FC<Props> = ({title, description, icon}) => {
    return (
        <Col className="p-2">
            <Card
                className="p-2 rounded-3 shadow-sm"
                style={{height: "150px"}}
            >
                <CardTitle tag="h3">
                    {icon}
                    {title}
                </CardTitle>
                <CardText>{description}</CardText>
            </Card>
        </Col>
    );
};

export default Section;
