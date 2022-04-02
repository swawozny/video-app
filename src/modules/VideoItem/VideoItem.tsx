import React, {useState} from "react";

import VideoModal from "../VideoModal/VideoModal";
import VideoTile from "../VideoTile/VideoTile";
import VideoListItem from "../VideoListItem/VideoListItem";
import {VideoItemProps} from "../../interfaces/VideoItemProps/VideoItemProps";
import {DisplayType} from "../../interfaces/DisplayForm/DisplayType";

interface Props extends VideoItemProps {
    currentDisplayType: DisplayType;
}

const VideoItem: React.FC<Props> = ({
                                        video,
                                        videoIndex,
                                        videoChanged,
                                        setVideoChanged,
                                        currentDisplayType
                                    }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [mouseEnter, setMouseEnter] = useState(false);

    const {title, playerEmbedUrl} = video;

    return (
        <>
            <VideoModal
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                videoTitle={title}
                playerEmbedUrl={playerEmbedUrl}
            />
            {currentDisplayType === DisplayType.TILE ?
                <VideoTile
                    key={"videoTile_" + videoIndex}
                    video={video}
                    videoIndex={videoIndex}
                    videoChanged={videoChanged}
                    setVideoChanged={setVideoChanged}
                    setModalOpen={setModalOpen}
                    mouseEnter={mouseEnter}
                    setMouseEnter={setMouseEnter}
                /> :
                <VideoListItem
                    key={"videoTile_" + videoIndex}
                    video={video}
                    videoIndex={videoIndex}
                    videoChanged={videoChanged}
                    setVideoChanged={setVideoChanged}
                    setModalOpen={setModalOpen}
                    mouseEnter={mouseEnter}
                    setMouseEnter={setMouseEnter}
                />
            }
        </>
    );
};

export default VideoItem;
