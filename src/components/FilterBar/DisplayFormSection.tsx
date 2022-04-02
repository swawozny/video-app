import React from "react";
import {ButtonGroup, Col, Form, FormGroup, Label} from "reactstrap";

import DisplayFormButton from "./DisplayFormButton";
import displayForms from "../../modules/FilterBar/displayForms";
import {DisplayType} from "../../interfaces/DisplayForm/DisplayType";

type Props = {
    currentDisplayType: DisplayType;
    setCurrentDisplayType: (Type: DisplayType) => void;
};

const DisplayFormSection: React.FC<Props> = ({currentDisplayType, setCurrentDisplayType}) => {
    return (
        <Form>
            <FormGroup row>
                <Label
                    for={"DISPLAY_SELECT"}
                    className="h6"
                >
                    DISPLAY:
                </Label>
                <Col>
                    <ButtonGroup>
                        {Array.from(displayForms.keys()).map((displayType, index) => {
                            return (
                                <DisplayFormButton
                                    index={index}
                                    displayType={displayType}
                                    currentDisplayType={currentDisplayType}
                                    setCurrentDisplayType={setCurrentDisplayType}
                                    key={"displayFormButton" + index}
                                />
                            );
                        })}
                    </ButtonGroup>
                </Col>
            </FormGroup>
        </Form>
    );
};

export default DisplayFormSection;
