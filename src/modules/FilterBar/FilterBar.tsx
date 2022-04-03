import React from "react";
import {Col, Container, Row} from "reactstrap";

import FilterBarInput from "../../components/FilterBar/FilterBarInput";
import DisplayFormSection from "../../components/FilterBar/DisplayFormSection";
import OptionsButton from "../../components/FilterBar/OptionsButton";
import ItemsNumberSelect from "../../components/FilterBar/ItemsNumberSelect";
import sortingModes from "./sortingModes";
import filterModes from "./filterModes";
import {FilterType} from "../../interfaces/FilterMode/FilterType";
import {SortingType} from "../../interfaces/FilterMode/SortingType";
import {DisplayType} from "../../interfaces/DisplayForm/DisplayType";

type Props = {
    filterType: FilterType;
    setFilterType: (type: FilterType) => void;
    sortingType: SortingType;
    setSortingType: (type: SortingType) => void;
    setCurrentPageNumber: (pageNumber: number) => void;
    displayType: DisplayType;
    setDisplayType: (type: DisplayType) => void;
    videoChanged: boolean;
    setVideoChanged: (isChanged: boolean) => void;
    currentPageItemsNumber: number;
    setCurrentPageItemsNumber: (itemsNumber: number) => void;
};

const FilterBar: React.FC<Props> = ({
                                        filterType,
                                        setFilterType,
                                        sortingType,
                                        setSortingType,
                                        setCurrentPageNumber,
                                        displayType,
                                        setDisplayType,
                                        videoChanged,
                                        setVideoChanged,
                                        currentPageItemsNumber,
                                        setCurrentPageItemsNumber
                                    }) => {
    return (
        <Container>
            <Row className="bg-light rounded-3 shadow-sm m-2 p-2 border"
            >
                <Col xl={3}>
                    <FilterBarInput
                        title={"FILTER"}
                        modes={filterModes}
                        currentType={filterType}
                        setCurrentType={setFilterType}
                        setCurrentPageNumber={setCurrentPageNumber}
                    />
                </Col>
                <Col xl={3}>
                    <FilterBarInput
                        title={"SORT"}
                        modes={sortingModes}
                        currentType={sortingType}
                        setCurrentType={setSortingType}
                        setCurrentPageNumber={setCurrentPageNumber}
                    />
                </Col>
                <Col xl={2}>
                    <ItemsNumberSelect
                        currentPageItemsNumber={currentPageItemsNumber}
                        setCurrentPageItemsNumber={setCurrentPageItemsNumber}
                        setCurrentPageNumber={setCurrentPageNumber}
                    />
                </Col>
                <Col xl={2}>
                    <OptionsButton
                        videoChanged={videoChanged}
                        setVideoChanged={setVideoChanged}
                        setCurrentPageNumber={setCurrentPageNumber}
                    />
                </Col>
                <Col xl={2}>
                    <DisplayFormSection
                        currentDisplayType={displayType}
                        setCurrentDisplayType={setDisplayType}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default FilterBar;
