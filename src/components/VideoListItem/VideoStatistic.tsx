import React from "react";
import {CardText} from "reactstrap";

type Props = {
    text: string;
    statisticValue: number | string | null;
    icon: JSX.Element;
};

const VideoStatistic: React.FC<Props> = ({text, statisticValue, icon}) => {
    if (!statisticValue) {
        return null;
    }

    return (
        <div className="m-2">
            <CardText tag="h5" className="fw-bold text-primary">
                {icon} {text}
            </CardText>
        <CardText className="fw-bold">
            {statisticValue}
        </CardText>
        </div>
    );
};

export default VideoStatistic;
