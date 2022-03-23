import React, {useState} from "react";
import {Card, CardBody, CardDeck, CardFooter, CardHeader, Col} from "reactstrap";
import {Calendar2DateFill} from "react-bootstrap-icons";

import VideoTitle from "../../components/VideoTile/VideoTitle";
import VideoStatistic from "../../components/VideoTile/VideoStatistic";
import VideoModal from "../VideoModal/VideoModal";
import VideoImage from "../../components/VideoTile/VideoImage";
import RemoveButton from "../../components/VideoTile/RemoveButton";
import {Video} from "../../interfaces/Video/Video";

type Props = {
    video: Video;
    videoIndex: number;
    removeVideo: (videoToRemove: Video) => void;
};

const VideoTile: React.FC<Props> = ({video, videoIndex, removeVideo}) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [mouseEnter, setMouseEnter] = useState(false);
    const getDate = () => {
        return new Date(video.publishedAt).toLocaleDateString();
    };

    const getShadowSize = () => {
        if (mouseEnter) {
            return "shadow-lg";
        }
        return "shadow-sm";
    };

    return (
        <>
            <VideoModal
                modalOpen={modalOpen}
                setModalOpen={setModalOpen}
                videoTitle={video.title}
                playerEmbedUrl={video.playerEmbedUrl}
            />
            <Col className="my-3">
                <CardDeck className={"rounded " + getShadowSize()}>
                    <CardHeader className="d-flex justify-content-end bg-primary bg-gradient">
                        <RemoveButton
                            video={video}
                            removeVideo={removeVideo}
                        />
                    </CardHeader>
                    <Card
                        className="text-center"
                        style={{height: "400px"}}
                        onClick={() => setModalOpen(true)}
                        onMouseEnter={() => setMouseEnter(true)}
                        onMouseLeave={() => setMouseEnter(false)}
                        inverse
                    >
                        <VideoImage
                            video={video}
                            mouseEnter={mouseEnter}
                            setModalOpen={setModalOpen}
                        />
                        <CardBody style={{minHeight: "30%"}}>
                            <VideoTitle
                                title={video.title}
                                videoIndex={videoIndex}
                            />
                        </CardBody>
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
        </>
    );
};

export default VideoTile;
