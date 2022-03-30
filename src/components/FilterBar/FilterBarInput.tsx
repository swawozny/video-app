import React from "react";
import {Col, Form, FormGroup, Input, Label} from "reactstrap";

import {Mode} from "../../interfaces/FilterMode/Mode";

interface Props<T> {
    title: string;
    modes: Map<T, Mode>;
    currentType: T;
    setCurrentType: (type: T) => void;
    setCurrentPageNumber: (pageNumber: number) => void;
}

const FilterBarInput = <T extends unknown>({
                                               title,
                                               modes,
                                               currentType,
                                               setCurrentType,
                                               setCurrentPageNumber
                                           }: Props<T>) => {
    const handleChangeType = (event: any) => {
        const newType = event.target.value || "";
        if (newType) {
            setCurrentType(newType);
            setCurrentPageNumber(1);
        }
    };

    return (
        <Form>
            <FormGroup row>
                <Label
                    for={title + "_SELECT"}
                    className="h6"
                >
                    {title}:
                </Label>
                <Col>
                    <Input
                        id={title + "_SELECT"}
                        name="select"
                        type="select"
                        value={String(currentType)}
                        onChange={event => handleChangeType(event)}
                    >
                        {Array.from(modes.keys()).map((type, index) => {
                            return (
                                <option
                                    key={`${title}Type_${index}`}
                                    value={String(type)}
                                >
                                    {modes.get(type)?.title}
                                </option>
                            );
                        })}
                    </Input>
                </Col>
            </FormGroup>
        </Form>
    );
};

export default FilterBarInput;

