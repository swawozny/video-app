import React from "react";
import {Container} from "reactstrap";

import AlertBox from "./AlertBox";

type Props = {
    videoTitle: string;
    playerEmbedUrl: string;
};

const VideoFrame: React.FC<Props> = ({videoTitle, playerEmbedUrl}) => {
    if (!playerEmbedUrl) {
        return (
            <AlertBox/>
        );
    }

    return (
        <Container className="d-flex justify-content-center align-items-center">
            <iframe
                src={playerEmbedUrl}
                title={videoTitle}
                style={{minHeight: "50vh", width: "100vh"}}
                allow="autoplay; encrypted-media; accelerometer; clipboard-write; gyroscope; fullscreen"
                referrerPolicy={"origin-when-cross-origin"}
            >
            </iframe>
        </Container>
    );
};

export default VideoFrame;
