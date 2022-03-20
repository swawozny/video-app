import React from "react";
import {PaginationItem, PaginationLink} from "reactstrap";

type Props = {
    isFirstPage: boolean;
    currentPageNumber: number;
    goToPage: (pageNumber: number) => void;
};

const PreviousPageButton: React.FC<Props> = ({isFirstPage, currentPageNumber, goToPage}) => {
    const goToPreviousPage = () => {
        goToPage(currentPageNumber - 1);
    };

    return (
        <PaginationItem
            disabled={isFirstPage}
            onClick={() => goToPreviousPage()}
        >
            <PaginationLink
                href="#"
                previous
            />
        </PaginationItem>
    );
};

export default PreviousPageButton;
