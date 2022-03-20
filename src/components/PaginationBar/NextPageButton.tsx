import React from "react";
import {PaginationItem, PaginationLink} from "reactstrap";

type Props = {
    isLastPage: boolean;
    currentPageNumber: number;
    goToPage: (pageNumber: number) => void;
};

const LastPageButton: React.FC<Props> = ({isLastPage, currentPageNumber, goToPage}) => {
    const goToNextPage = () => {
        goToPage(currentPageNumber + 1);
    };

    return (
        <PaginationItem
            disabled={isLastPage}
            onClick={() => goToNextPage()}
        >
            <PaginationLink
                href="#"
                next
            />
        </PaginationItem>
    );
};

export default LastPageButton;
