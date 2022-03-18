import React from "react";
import {Card, CardBody, CardDeck, CardFooter, CardImg, CardImgOverlay, Col} from "reactstrap";
import {HandThumbsUpFill, EyeFill, Calendar2DateFill} from "react-bootstrap-icons";

import {Video} from "../../interfaces/Video/Video";
import VideoTitle from "../../components/VideoTile/VideoTitle";
import VideoStatistic from "../../components/VideoTile/VideoStatistic";

type Props = {
    video: Video;
    videoIndex: number;
};

const VideoTile: React.FC<Props> = ({video, videoIndex}) => {
    const getDate = () => {
        return new Date(video.publishedAt).toLocaleDateString();
    };

    return (
        <Col className="my-3">
            <CardDeck>
            <Card inverse className="rounded text-center shadow-sm" style={{height: "400px"}}>
                <CardImg
                    alt={video.title}
                    style={{height: "60%", width: "100%"}}
                    src={video.thumbnail}
                    top
                />
                    <CardImgOverlay
                        style={{height: "62%", width: "100%"}}
                        className="d-flex flex-column justify-content-end align-items-start"
                    >
                            <VideoStatistic
                                statisticValue={video.likes}
                                icon={<HandThumbsUpFill className="mb-1"/>}
                            />
                    </CardImgOverlay>
                <CardImgOverlay
                    style={{height: "62%", width: "100%"}}
                    className="d-flex flex-column justify-content-end align-items-end">
                            <VideoStatistic
                                statisticValue={video.views}
                                icon={<EyeFill className="mb-1"/>}
                            />
                    </CardImgOverlay>
                <CardBody
                    style={{minHeight: "30%"}}

                >
                    <VideoTitle
                        title={video.title}
                        videoIndex={videoIndex}
                    />
                </CardBody>
                <CardFooter
                    className="bg-primary"
                    style={{minHeight: "10%", minWidth: "auto"}}
                >
                    <VideoStatistic statisticValue={getDate()} icon={<Calendar2DateFill className="mb-1"/>}/>
                </CardFooter>
            </Card>
            </CardDeck>
        </Col>
    );
};

export default VideoTile;
