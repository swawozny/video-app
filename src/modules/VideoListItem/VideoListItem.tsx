import React from "react";
import {Card, CardBody, CardFooter, CardHeader, Col, Row} from "reactstrap";
import {Calendar2DateFill, EyeFill, HandThumbsUpFill} from "react-bootstrap-icons";

import VideoImage from "../../components/VideoListItem/VideoImage";
import LikeButton from "../../components/VideoItem/LikeButton";
import PlayButton from "../../components/VideoItem/PlayButton";
import VideoStatistic from "../../components/VideoListItem/VideoStatistic";
import RemoveButton from "../../components/VideoItem/RemoveButton";
import {VideoItemProps} from "../../interfaces/VideoItemProps/VideoItemProps";
import {VideoService} from "../../services/VideoService/VideoService";

interface Props extends VideoItemProps {
    setModalOpen: (open: boolean) => void;
    mouseEnter: boolean;
    setMouseEnter: (enter: boolean) => void;
}

const VideoListItem: React.FC<Props> = ({
                                            video,
                                            videoIndex,
                                            videoChanged,
                                            setVideoChanged,
                                            setModalOpen,
                                            mouseEnter,
                                            setMouseEnter
                                        }) => {
    const getVideoAddedDate = () => {
        return VideoService.getVideoAddedDate(video).toLocaleString();
    };

    const {title, likes, views} = video;

    return (
        <Row className="my-2">
            <Col sm={12}>
                <Card>
                    <CardHeader tag="h5">
                        {title}
                    </CardHeader>
                    <Row>
                        <Col sm={4}>
                            <CardBody className="h-100 bg-light border-end border-light">
                                <VideoImage
                                    video={video}
                                    mouseEnter={mouseEnter}
                                    setMouseEnter={setMouseEnter}
                                    setModalOpen={setModalOpen}
                                />
                            </CardBody>
                        </Col>
                        <Col
                            sm={8}
                            className="p-2 mt-2"
                        >
                            <CardBody>
                                <Row>
                                    <Col md={6}>
                                        <VideoStatistic
                                            text={"LIKES"}
                                            statisticValue={likes}
                                            icon={<HandThumbsUpFill className="mb-1"/>}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <VideoStatistic
                                            text={"VIEWS"}
                                            statisticValue={views}
                                            icon={<EyeFill className="mb-1"/>}
                                        />
                                    </Col>
                                </Row>
                                <VideoStatistic
                                    text={"ADDED DATE"}
                                    statisticValue={getVideoAddedDate()}
                                    icon={<Calendar2DateFill className="mb-1"/>}
                                />
                            </CardBody>
                        </Col>
                    </Row>
                    <CardFooter className="d-flex justify-content-end align-items-center">
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
                </Card>
            </Col>
        </Row>
    );
};

export default VideoListItem;
