import React from "react";
import {Card, CardBody, CardDeck, CardFooter, Col} from "reactstrap";
import {Calendar2DateFill} from "react-bootstrap-icons";

import VideoTitle from "../../components/VideoTile/VideoTitle";
import VideoStatistic from "../../components/VideoTile/VideoStatistic";
import VideoImage from "../../components/VideoTile/VideoImage";
import RemoveButton from "../../components/VideoItem/RemoveButton";
import LikeButton from "../../components/VideoItem/LikeButton";
import PlayButton from "../../components/VideoItem/PlayButton";
import {VideoItemProps} from "../../interfaces/VideoItemProps/VideoItemProps";
import {VideoService} from "../../services/VideoService/VideoService";

interface Props extends VideoItemProps {
    setModalOpen: (open: boolean) => void;
    mouseEnter: boolean;
    setMouseEnter: (enter: boolean) => void;
}

const VideoTile: React.FC<Props> = ({
                                        video,
                                        videoIndex,
                                        videoChanged,
                                        setVideoChanged,
                                        setModalOpen,
                                        mouseEnter,
                                        setMouseEnter
                                    }) => {
    const getDate = () => {
        return VideoService.getVideoAddedDate(video).toLocaleDateString();
    };

    const getShadowSize = () => {
        if (mouseEnter) {
            return "shadow-lg";
        }
        return "shadow-sm";
    };

    return (
        <Col className="my-3">
            <CardDeck className={"rounded " + getShadowSize()}>
                <Card
                    className="text-center"
                    style={{height: "450px"}}
                    inverse
                >
                    <VideoImage
                        video={video}
                        mouseEnter={mouseEnter}
                        setMouseEnter={setMouseEnter}
                        setModalOpen={setModalOpen}
                    />
                    <CardBody style={{minHeight: "20%"}}>
                        <VideoTitle
                            title={video.title}
                            videoIndex={videoIndex}
                        />
                    </CardBody>
                    <CardFooter style={{minHeight: "10%", minWidth: "auto"}} className="bg-gradient">
                        <PlayButton
                            video={video}
                            index={videoIndex}
                        />
                        <LikeButton
                            video={video}
                            index={videoIndex}
                            videoChanged={videoChanged}
                            setVideoChanged={setVideoChanged}
                        />
                        <RemoveButton
                            video={video}
                            index={videoIndex}
                            videoChanged={videoChanged}
                            setVideoChanged={setVideoChanged}
                        />
                    </CardFooter>
                    <CardFooter
                        className="bg-primary"
                        style={{minHeight: "10%", minWidth: "auto"}}
                    >
                        <VideoStatistic
                            statisticValue={getDate()}
                            icon={<Calendar2DateFill className="mb-1"/>}
                        />
                    </CardFooter>
                </Card>
            </CardDeck>
        </Col>
    );
};

export default VideoTile;
