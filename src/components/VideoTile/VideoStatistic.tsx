import React from "react";
import {CardText} from "reactstrap";

type Props = {
    statisticValue: number | string | null;
    icon: JSX.Element;
};

const VideoStatistic: React.FC<Props> = ({statisticValue, icon}) => {
    if (!statisticValue) {
        return null;
    }

    return (
        <CardText>
            <p className="fw-bold"> {icon} {statisticValue}</p>
        </CardText>
    );
};

export default VideoStatistic;
