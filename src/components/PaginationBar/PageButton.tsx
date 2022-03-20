import React from "react";
import {PaginationItem, PaginationLink} from "reactstrap";

type Props = {
    pageNumber: number;
    isActive: boolean;
    goToPage: (pageNumber: number) => void;
};

const PageButton: React.FC<Props> = ({pageNumber, isActive, goToPage}) => {
    return (
        <PaginationItem
            active={isActive}
            onClick={() => goToPage(pageNumber)}
        >
            <PaginationLink href="#">
                {pageNumber}
            </PaginationLink>
        </PaginationItem>
    );
};

export default PageButton;
