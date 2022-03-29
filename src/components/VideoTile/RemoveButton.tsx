import React from "react";
import {Button, UncontrolledTooltip} from "reactstrap";
import {TrashFill} from "react-bootstrap-icons";

import {Video} from "../../interfaces/Video/Video";
import {VideoService} from "../../services/VideoService/VideoService";

type Props = {
    video: Video;
    index: number;
    videoChanged: boolean;
    setVideoChanged: (isChanged: boolean) => void;
};

const RemoveButton: React.FC<Props> = ({video, index, videoChanged, setVideoChanged}) => {
    const handleRemoveVideo = () => {
        setVideoChanged(!videoChanged);
        VideoService.removeVideo(video);
    };

    return (
        <>
            <Button
                color="light"
                id={"removeButton_" + index}
                className="rounded shadow-sm btn border"
                onClick={() => handleRemoveVideo()}
            >
                <TrashFill className="text-danger"/>
            </Button>
            <UncontrolledTooltip
                placement="bottom"
                target={"removeButton_" + index}
            >
                Remove from list
            </UncontrolledTooltip>
        </>
    );
};

export default RemoveButton;
