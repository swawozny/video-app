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
        <CardText className="fw-bold">
            {icon} {statisticValue}
        </CardText>
    );
};

export default VideoStatistic;
