import React from "react";
import {Container, Row} from "reactstrap";

import AlertBox from "../../components/VideosBar/AlertBox";
import VideoItem from "../VideoItem/VideoItem";
import displayForms from "../FilterBar/displayForms";
import {Video} from "../../interfaces/Video/Video";
import {DisplayType} from "../../interfaces/DisplayForm/DisplayType";

type Props = {
    videoList: Video[];
    videoChanged: boolean;
    setVideoChanged: (isChanged: boolean) => void;
    displayType: DisplayType;
};

const VideosBar: React.FC<Props> = ({videoList, videoChanged, setVideoChanged, displayType}) => {
    if (videoList.length === 0) {
        return (
            <AlertBox/>
        );
    }

    const {xs, md, xl} = {...displayForms?.get(displayType)?.rowCols};

    return (
        <Container>
            <Row
                xs={xs}
                md={md}
                xl={xl}
                className="m-2 p-2"
            >
                {videoList.map((video, index) => {
                    return (
                        <VideoItem
                            key={"videoItem_" + index}
                            video={video}
                            videoIndex={index}
                            videoChanged={videoChanged}
                            setVideoChanged={setVideoChanged}
                            currentDisplayType={displayType}
                        />
                    );
                })}
            </Row>
        </Container>
    );
};

export default VideosBar;
