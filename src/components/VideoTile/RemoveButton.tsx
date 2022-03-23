import React from "react";
import {Button, UncontrolledTooltip} from "reactstrap";
import {TrashFill} from "react-bootstrap-icons";

import {Video} from "../../interfaces/Video/Video";

type Props = {
    video: Video;
    index: number;
    removeVideo: (videoToRemove: Video) => void;
};

const RemoveButton: React.FC<Props> = ({video, index, removeVideo}) => {
    return (
        <>
            <Button
                color="light"
                id={"removeButton_" + index}
                className="rounded shadow-sm btn"
                onClick={() => removeVideo(video)}
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
