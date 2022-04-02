import {IconDefinition} from "@fortawesome/free-solid-svg-icons";

interface RowColsPropsType {
    xs: string;
    md: string;
    xl: string;
}

export interface DisplayForm {
    title: string;
    icon: IconDefinition;
    rowCols: RowColsPropsType;
}
