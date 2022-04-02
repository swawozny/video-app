import React, {useState} from "react";
import {Button, Input, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

type Props = {
    actionTitle: string;
    modalOpen: boolean;
    setModalOpen: (open: boolean) => void;
    onConfirm: () => void;
    videoChanged: boolean;
    setVideoChanged: (isChanged: boolean) => void;
};

const ConfirmationModal: React.FC<Props> = ({
                                                actionTitle,
                                                modalOpen,
                                                setModalOpen,
                                                onConfirm,
                                                videoChanged,
                                                setVideoChanged
                                            }) => {
    const [input, setInput] = useState("");

    const hideModal = () => {
        setInput("");
        setModalOpen(false);
    };

    const isInputCorrect = () => {
        return input === actionTitle;
    };

    const onInputChange = (event: any) => {
        const inputText = event.target.value || "";
        if (inputText) {
            setInput(inputText);
        }
    };

    const onSubmitClick = () => {
        onConfirm();
        setVideoChanged(!videoChanged);
        hideModal();
    };

    return (
        <Modal
            isOpen={modalOpen}
            fade={false}
        >
            <ModalHeader toggle={hideModal}>
                CONFIRM DECISION
            </ModalHeader>
            <ModalBody>
                Are you sure of your decision? Once approved, it will not be possible to return.
                <br></br>
                Please type <b className="text-primary">{actionTitle}</b> to confirm:
                <Input onChange={onInputChange}>

                </Input>
            </ModalBody>
            <ModalFooter>
                <Button
                    color="success"
                    onClick={onSubmitClick}
                    disabled={!isInputCorrect()}
                >
                    Confirm
                </Button>
                <Button
                    color="danger"
                    onClick={hideModal}
                >
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default ConfirmationModal;
