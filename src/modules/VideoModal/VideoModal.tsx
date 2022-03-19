import React from "react";
import {Modal, ModalBody, ModalHeader} from "reactstrap";

import VideoFrame from "../../components/VideoModal/VideoFrame";

type Props = {
    modalOpen: boolean;
    setModalOpen: (modalOpen: boolean) => void;
    videoTitle: string;
    playerEmbedUrl: string;
};

const VideoModal: React.FC<Props> = ({modalOpen, setModalOpen, videoTitle, playerEmbedUrl}) => {
    const hideModal = () => {
        setModalOpen(false);
    };

    return (
        <Modal
            isOpen={modalOpen}
            toggle={hideModal}
            style={{minWidth: "60%"}}
            centered={true}
        >
            <ModalHeader toggle={hideModal}>
                {videoTitle}
            </ModalHeader>
            <ModalBody
                style={{minHeight: "40vh"}}
                className="d-flex justify-content-center align-items-center"
            >
                <VideoFrame
                    videoTitle={videoTitle}
                    playerEmbedUrl={playerEmbedUrl}
                />
            </ModalBody>
        </Modal>
    );
};

export default VideoModal;
