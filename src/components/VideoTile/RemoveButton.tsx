import React from "react";
import {Button} from "reactstrap";
import {TrashFill} from "react-bootstrap-icons";

import {Video} from "../../interfaces/Video/Video";

type Props = {
    video: Video;
    removeVideo: (videoToRemove: Video) => void;
};

const RemoveButton: React.FC<Props> = ({video, removeVideo}) => {
    return (
        <Button
            color="light"
            className="rounded shadow-sm btn"
            onClick={() => removeVideo(video)}
        >
            <TrashFill className="text-danger"/>
        </Button>
    );
};

export default RemoveButton;
