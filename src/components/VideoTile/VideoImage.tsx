import React from "react";
import {CardImg, CardImgOverlay} from "reactstrap";
import {EyeFill, HandThumbsUpFill, PlayCircleFill} from "react-bootstrap-icons";

import VideoStatistic from "./VideoStatistic";
import {Video} from "../../interfaces/Video/Video";

type Props = {
    video: Video;
    mouseEnter: boolean;
    setMouseEnter: (enter: boolean) => void;
    setModalOpen: (modalOpen: boolean) => void;
};

const VideoImage: React.FC<Props> = ({video, mouseEnter, setMouseEnter, setModalOpen}) => {
    const {title, likes, views} = video;

    const getOpacity = () => {
        if (mouseEnter) {
            return "opacity-25";
        }
        return "opacity-100";
    };

    return (
        <>
            <CardImg
                alt={title}
                src={video.thumbnail}
                style={{height: "50%", width: "100%"}}
                className={getOpacity()}
                top
            />
            {mouseEnter ?
                <CardImgOverlay
                    style={{height: "52%", width: "100%"}}
                    className="d-flex flex-column justify-content-center align-items-center"
                    onClick={() => setModalOpen(true)}
                >
                    <PlayCircleFill
                        size={50}
                        className="shadow-sm border-1 text-black"
                        onClick={() => setModalOpen(true)}
                    />
                </CardImgOverlay> : null}
            <CardImgOverlay
                style={{height: "52%", width: "100%"}}
                className="d-flex flex-column justify-content-end align-items-start">
                <VideoStatistic
                    statisticValue={likes}
                    icon={<HandThumbsUpFill className="mb-1"/>}
                />
            </CardImgOverlay>
            <CardImgOverlay
                style={{height: "52%", width: "100%"}}
                className="d-flex flex-column justify-content-end align-items-end"
                onClick={() => setModalOpen(true)}
                onMouseEnter={() => setMouseEnter(true)}
                onMouseLeave={() => setMouseEnter(false)}
            >
                <VideoStatistic
                    statisticValue={views}
                    icon={<EyeFill className="mb-1"/>}
                />
            </CardImgOverlay>
        </>
    );
};

export default VideoImage;
