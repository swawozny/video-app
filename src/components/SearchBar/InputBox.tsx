import React from "react";
import {Button, Col, Input, InputGroup} from "reactstrap";

type Props = {
    buttonText: string;
    inputPlaceHolder: string;
};

const InputBox: React.FC<Props> = ({buttonText, inputPlaceHolder}) => {
    return (
        <Col>
            <InputGroup size="lg">
                <Input placeholder={inputPlaceHolder}/>
                <Button color="primary">
                    {buttonText}
                </Button>
            </InputGroup>
        </Col>
    );
};

export default InputBox;
