import React from "react";
import {PaginationItem, PaginationLink} from "reactstrap";

type Props = {
    isFirstPage: boolean;
    goToPage: (pageNumber: number) => void;
};

const FirstPageButton: React.FC<Props> = ({isFirstPage, goToPage}) => {
    const goToFirstPage = () => {
        goToPage(1);
    };

    return (
        <PaginationItem
            disabled={isFirstPage}
            onClick={() => goToFirstPage()}
        >
            <PaginationLink
                href="#"
                first
            />
        </PaginationItem>
    );
};

export default FirstPageButton;
