import React from "react";
import {Col, Container, Pagination, Row} from "reactstrap";

import PreviousPageButton from "../../components/PaginationBar/PreviousPageButton";
import FirstPageButton from "../../components/PaginationBar/FirstPageButton";
import LastPageButton from "../../components/PaginationBar/LastPageButton";
import NextPageButton from "../../components/PaginationBar/NextPageButton";
import PageButton from "../../components/PaginationBar/PageButton";

type Props = {
    listLength: number;
    currentPageNumber: number;
    setCurrentPageNumber: (pageNumber: number) => void;
    pageItemsNumber: number;
};

const PaginationBar: React.FC<Props> = ({listLength, currentPageNumber, setCurrentPageNumber, pageItemsNumber}) => {
    const getNumberOfPages = () => {
        return Math.ceil(listLength / pageItemsNumber);
    };

    const isItemActive = (index: number) => {
        return index + 1 === currentPageNumber;
    };

    const isFirstPage = () => {
        return currentPageNumber === 1;
    };

    const isLastPage = () => {
        return currentPageNumber === getNumberOfPages();
    };

    const goToPage = (pageNumber: number) => {
        if (pageNumber > 0 && pageNumber < getNumberOfPages() + 1) {
            setCurrentPageNumber(pageNumber);
            window.scrollTo({top: 0, behavior: 'smooth'});
        }
    };

    if (listLength === 0) {
        return null;
    }

    return (
        <Container>
            <Row className="bg-light rounded-3 shadow-sm m-2 p-2 border">
                <Col className="d-flex justify-content-end align-items-center">
                    <Pagination
                        aria-label="Movie list pagination"
                        className="mt-3"
                    >
                        <FirstPageButton
                            isFirstPage={isFirstPage()}
                            goToPage={goToPage}
                        />
                        <PreviousPageButton
                            isFirstPage={isFirstPage()}
                            currentPageNumber={currentPageNumber}
                            goToPage={goToPage}
                        />
                        {[...Array(getNumberOfPages())].map((_, index) => {
                            return (
                                <PageButton
                                    key={"pageNumber_" + index}
                                    pageNumber={index + 1}
                                    isActive={isItemActive(index)}
                                    goToPage={goToPage}
                                />
                            );
                        })}
                        <NextPageButton
                            isLastPage={isLastPage()}
                            currentPageNumber={currentPageNumber}
                            goToPage={goToPage}
                        />
                        <LastPageButton
                            isLastPage={isLastPage()}
                            pagesNumber={getNumberOfPages()}
                            goToPage={goToPage}
                        />
                    </Pagination>
                </Col>
            </Row>
        </Container>
    );
};

export default PaginationBar;
