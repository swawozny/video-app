import {CardTitle, UncontrolledTooltip} from "reactstrap";
import React from "react";

type Props = {
    title: string;
    videoIndex: number;
};

const VideoTitle: React.FC<Props> = ({title, videoIndex}) => {
    const getVideoTitle = () => {
        if (title.length > 112) {
            return title.slice(0, 110).concat("...");
        }
        return title;
    };

    return (
        <div className="d-flex align-items-center">
            <CardTitle
                tag="h6"
                id={"videoTitle_" + videoIndex}
                className="text-black fw-bolder d-flex align-items-start"
                style={{height: "100%", width: "100%"}}
            >
                {getVideoTitle()}
            </CardTitle>
            <UncontrolledTooltip
                placement="right"
                target={"videoTitle_" + videoIndex}
            >
                {title}
            </UncontrolledTooltip>
        </div>
    );
};

export default VideoTitle;
