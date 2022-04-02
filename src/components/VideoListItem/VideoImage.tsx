import React from "react";
import {CardImg, CardImgOverlay} from "reactstrap";
import {PlayCircleFill} from "react-bootstrap-icons";

import {Video} from "../../interfaces/Video/Video";

type Props = {
    video: Video;
    mouseEnter: boolean;
    setMouseEnter: (enter: boolean) => void;
    setModalOpen: (modalOpen: boolean) => void;
};

const VideoImage: React.FC<Props> = ({video, mouseEnter, setMouseEnter, setModalOpen}) => {
    const {thumbnail, title} = video;

    const getOpacity = () => {
        if (mouseEnter) {
            return "opacity-25";
        }
        return "opacity-100";
    };

    return (
        <div className="position-relative">
            <CardImg
                src={thumbnail}
                alt={title}
                className={getOpacity()}
            >
            </CardImg>
            <CardImgOverlay
                className="d-flex align-items-center justify-content-center"
                onClick={() => setModalOpen(true)}
                onMouseEnter={() => setMouseEnter(true)}
                onMouseLeave={() => setMouseEnter(false)}
            >
                {mouseEnter ?
                    <PlayCircleFill
                        size={50}
                        className="shadow-sm border-1 text-black"
                        onClick={() => setModalOpen(true)}
                    />
                    : null}
            </CardImgOverlay>
        </div>
    );

};

export default VideoImage;
