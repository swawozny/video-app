import React from "react";
import {Container, Row} from "reactstrap";

import VideoTile from "../VideoTile/VideoTile";
import AlertBox from "../../components/VideosBar/AlertBox";
import {Video} from "../../interfaces/Video/Video";

type Props = {
    videoList: Video[];
    videoChanged: boolean;
    setVideoChanged: (isChanged: boolean) => void;
};

const VideosBar: React.FC<Props> = ({videoList, videoChanged, setVideoChanged}) => {
    if (videoList.length === 0) {
        return (
            <AlertBox/>
        );
    }

    return (
        <Container>
            <Row
                xs="1"
                md="2"
                xl="4"
                className="m-2 p-2"
            >
                {videoList.map((video, index) => {
                    return (
                        <VideoTile
                            key={"videoTile_" + index}
                            video={video}
                            videoIndex={index}
                            videoChanged={videoChanged}
                            setVideoChanged={setVideoChanged}
                        />
                    );
                })}
            </Row>
        </Container>
    );
};

export default VideosBar;
