import React from "react";
import {Container, Row} from "reactstrap";

import FilterBarInput from "../../components/FilterBar/FilterBarInput";
import DisplayFormSection from "../../components/FilterBar/DisplayFormSection";
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
};

const FilterBar: React.FC<Props> = ({
                                        filterType,
                                        setFilterType,
                                        sortingType,
                                        setSortingType,
                                        setCurrentPageNumber,
                                        displayType,
                                        setDisplayType
                                    }) => {
    return (
        <Container>
            <Row className="bg-light rounded-3 shadow-sm m-2 p-2 border"
                 xs={1}
                 md={2}
                 xl={4}
            >
                <FilterBarInput
                    title={"FILTER"}
                    modes={filterModes}
                    currentType={filterType}
                    setCurrentType={setFilterType}
                    setCurrentPageNumber={setCurrentPageNumber}
                />
                <FilterBarInput
                    title={"SORT"}
                    modes={sortingModes}
                    currentType={sortingType}
                    setCurrentType={setSortingType}
                    setCurrentPageNumber={setCurrentPageNumber}
                />
                <DisplayFormSection
                    currentDisplayType={displayType}
                    setCurrentDisplayType={setDisplayType}
                />
            </Row>
        </Container>
    );
};

export default FilterBar;
