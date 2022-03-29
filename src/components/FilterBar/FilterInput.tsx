import React from "react";
import {Col, Form, FormGroup, Input, Label} from "reactstrap";

import filterModes from "../../modules/FilterBar/filterModes";
import {FilterType} from "../../interfaces/FilterMode/FilterType";

type Props = {
    filterType: FilterType;
    setFilterType: (type: FilterType) => void;
};

const FilterInput: React.FC<Props> = ({filterType, setFilterType}) => {
    const handleChangeFilterType = (event: any) => {
        const newFilterType = event.target.value || "";
        if (newFilterType) {
            setFilterType(newFilterType);
        }
    };

    return (
        <Form>
            <FormGroup row>
                <Label
                    for="filterSelect"
                    className="h6"
                >
                    FILTERS:
                </Label>
                <Col>
                    <Input
                        id="filterSelect"
                        name="select"
                        type="select"
                        value={filterType}
                        onChange={event => handleChangeFilterType(event)}
                    >
                        {Array.from(filterModes.keys()).map((filterType, index) => {
                            return (
                                <option
                                    key={"filterType_" + index}
                                    value={filterType}
                                >
                                    {filterModes.get(filterType)?.title}
                                </option>
                            );
                        })}
                    </Input>
                </Col>
            </FormGroup>
        </Form>
    );
};

export default FilterInput;
