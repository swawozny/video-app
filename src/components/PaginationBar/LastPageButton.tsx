import React from "react";
import {PaginationItem, PaginationLink} from "reactstrap";

type Props = {
    isLastPage: boolean;
    pagesNumber: number;
    goToPage: (pageNumber: number) => void;
};

const LastPageButton: React.FC<Props> = ({isLastPage, pagesNumber, goToPage}) => {
    const goToLastPage = () => {
        goToPage(pagesNumber);
    };

    return (
        <PaginationItem
            disabled={isLastPage}
            onClick={() => goToLastPage()}
        >
            <PaginationLink
                href="#"
                last
            />
        </PaginationItem>
    );
};

export default LastPageButton;
