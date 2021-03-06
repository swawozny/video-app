import React, {useState} from "react";
import {Button, UncontrolledTooltip} from "reactstrap";
import {Heart, HeartFill} from "react-bootstrap-icons";

import {VideoService} from "../../services/VideoService/VideoService";
import {Video} from "../../interfaces/Video/Video";

type Props = {
    video: Video;
    index: number;
    videoChanged: boolean;
    setVideoChanged: (isChanged: boolean) => void;
};

const LikeButton: React.FC<Props> = ({video, index, videoChanged, setVideoChanged}) => {
    const [mouseEnter, setMouseEnter] = useState(false);

    const handleChangeFavorite = () => {
        setVideoChanged(!videoChanged);
        VideoService.changeFavorite(video);
    };

    const isVideoFavorite = () => {
        return VideoService.isVideoFavorite(video);
    };

    const getToolTipText = () => {
        return isVideoFavorite() ? "Remove from favorites" : "Add to favorites";
    };

    const getButtonIcon = () => {
        if (isVideoFavorite() || mouseEnter) {
            return <HeartFill/>;
        }
        return <Heart/>;
    };

    return (
        <>
            <Button
                id={"likeButton_" + index}
                color="light"
                className="rounded shadow-sm btn mx-1 text-secondary border"
                onMouseEnter={() => setMouseEnter(true)}
                onMouseLeave={() => setMouseEnter(false)}
                onClick={() => handleChangeFavorite()}
            >
                {getButtonIcon()}
            </Button>
            <UncontrolledTooltip
                placement="bottom"
                target={"likeButton_" + index}
            >
                {getToolTipText()}
            </UncontrolledTooltip>
        </>
    );
};

export default LikeButton;
