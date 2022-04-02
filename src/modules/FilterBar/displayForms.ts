import {faBars, faGrip} from "@fortawesome/free-solid-svg-icons";

import {DisplayType} from "../../interfaces/DisplayForm/DisplayType";
import {DisplayForm} from "../../interfaces/DisplayForm/DisplayForm";

const displayForms: Map<DisplayType, DisplayForm> = new Map<DisplayType, DisplayForm>(
    [
        [
            DisplayType.TILE,
            {
                title: "Tile view",
                icon: faGrip,
                rowCols: {
                    xs: "1",
                    md: "2",
                    xl: "4"
                }
            }
        ],
        [
            DisplayType.LIST,
            {
                title: "List view",
                icon: faBars,
                rowCols: {
                    xs: "1",
                    md: "1",
                    xl: "1"
                }
            }
        ]

    ]
);

export default displayForms;
