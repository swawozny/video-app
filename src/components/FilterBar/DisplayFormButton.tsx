import React from "react";
import {Button, UncontrolledTooltip} from "reactstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {DisplayType} from "../../interfaces/DisplayForm/DisplayType";
import displayForms from "../../modules/FilterBar/displayForms";

type Props = {
    index: number;
    displayType: DisplayType;
    currentDisplayType: DisplayType;
    setCurrentDisplayType: (type: DisplayType) => void;
};

const DisplayFormButton: React.FC<Props> = ({index, displayType, currentDisplayType, setCurrentDisplayType}) => {
    const isOutline = () => {
        if (displayType !== currentDisplayType) {
            return true;
        }
        return false;
    };

    const changeCurrentDisplayType = () => {
        setCurrentDisplayType(displayType);
    };

    const {title, icon} = {...displayForms?.get(displayType)};

    return (
        <>
            <Button
                color="primary"
                id={"displayFormToolTip_" + index}
                outline={isOutline()}
                onClick={() => changeCurrentDisplayType()}
            >
                {icon ?
                    <FontAwesomeIcon
                        className="icon"
                        icon={icon}
                    /> : null
                }

            </Button>
            <UncontrolledTooltip
                placement="bottom"
                target={"displayFormToolTip_" + index}
            >
                {title}
            </UncontrolledTooltip>
        </>
    );
};

export default DisplayFormButton;
