import React from "react";
import {Col, Form, FormGroup, Input, Label} from "reactstrap";

import itemsNumberOptions from "../../modules/FilterBar/itemsNumberOptions";

type Props = {
    currentPageItemsNumber: number;
    setCurrentPageItemsNumber: (itemsNumber: number) => void;
    setCurrentPageNumber: (pageNumber: number) => void;
};

const ItemsNumberSelect: React.FC<Props> = ({
                                                currentPageItemsNumber,
                                                setCurrentPageItemsNumber,
                                                setCurrentPageNumber
                                            }) => {
    const handleChangeItemsNumber = (event: any) => {
        const newPageItemsNumber = event.target.value || "";
        if (newPageItemsNumber) {
            setCurrentPageItemsNumber(newPageItemsNumber);
            setCurrentPageNumber(1);
        }
    };

    return (
        <Form>
            <FormGroup row>
                <Label
                    for={"ITEMS_SELECT"}
                    className="h6"
                >
                    VIDEOS NUMBER:
                </Label>
                <Col>
                    <Input
                        id={"ITEMS_SELECT"}
                        name="select"
                        type="select"
                        value={currentPageItemsNumber}
                        onChange={event => handleChangeItemsNumber(event)}
                    >
                        {itemsNumberOptions.map((itemsNumber, index) => {
                            return (
                                <option value={itemsNumber.value} key={"itemsNumberOption_" + index}>
                                    {itemsNumber.value} per page
                                </option>
                            );
                        })}

                    </Input>
                </Col>
            </FormGroup>
        </Form>
    );
};

export default ItemsNumberSelect;
