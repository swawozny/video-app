import React from "react";
import {Container, Row} from "reactstrap";

import FilterInput from "../../components/FilterBar/FilterInput";
import {FilterType} from "../../interfaces/FilterMode/FilterType";

type Props = {
    filterType: FilterType;
    setFilterType: (type: FilterType) => void;
};

const FilterBar: React.FC<Props> = ({filterType, setFilterType}) => {
    return (
        <Container>
            <Row className="bg-light rounded-3 shadow-sm m-2 p-2 border"
                 xs={1}
                 md={2}
                 xl={4}
            >
                <FilterInput
                    filterType={filterType}
                    setFilterType={setFilterType}
                />
            </Row>
        </Container>
    );
};

export default FilterBar;
