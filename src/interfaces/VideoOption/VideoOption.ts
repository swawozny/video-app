import {Icon} from "react-bootstrap-icons";

export interface VideoOption {
    title: string;
    icon: Icon;
    onSubmit: () => void;
}
