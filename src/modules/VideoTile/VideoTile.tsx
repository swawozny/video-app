import React, {useState} from "react";
import {Card, CardBody, CardDeck, CardFooter, Col} from "reactstrap";
import {Calendar2DateFill} from "react-bootstrap-icons";

import VideoTitle from "../../components/VideoTile/VideoTitle";
import VideoStatistic from "../../components/VideoTile/VideoStatistic";
import VideoModal from "../VideoModal/VideoModal";
import VideoImage from "../../components/VideoTile/VideoImage";
import RemoveButton from "../../components/VideoTile/RemoveButton";
import LikeButton from "../../components/VideoTile/LikeButton";
import PlayButton from "../../components/VideoTile/PlayButton";
import {Video} from "../../interfaces/Video/Video";

type Props = {
    video: Video;
    videoIndex: number;
    videoChanged: boolean;
    setVideoChanged: (isChanged: boolean) => void;
};

const VideoTile: React.FC<Props> = ({video, videoIndex, videoChanged, setVideoChanged}) => {
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
        </>
    );
};

export default VideoTile;
