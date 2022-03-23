import React from "react";
import {Button, UncontrolledTooltip} from "reactstrap";
import {PlayCircleFill} from "react-bootstrap-icons";

import {Video} from "../../interfaces/Video/Video";

type Props = {
    video: Video;
    index: number;
};

const PlayButton: React.FC<Props> = ({video, index}) => {
    const playVideo = () => {
        window.open(video.link, "_blank");
    };

    return (
        <>
            <Button
                color="light"
                id={"playButton_" + index}
                className="rounded shadow-sm btn border"
                onClick={() => playVideo()}
            >
                <PlayCircleFill/>
            </Button>
            <UncontrolledTooltip
                placement="bottom"
                target={"playButton_" + index}
            >
                Open video in new tab
            </UncontrolledTooltip>
        </>
    );
};

export default PlayButton;
