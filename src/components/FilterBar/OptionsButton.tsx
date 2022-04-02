import React, {useState} from "react";
import {ButtonDropdown, Col, DropdownItem, DropdownMenu, DropdownToggle, Form, FormGroup, Label} from "reactstrap";

import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import videoOptions from "../../modules/FilterBar/videoOptions";
import {VideoOption} from "../../interfaces/VideoOption/VideoOption";

type Props = {
    videoChanged: boolean;
    setVideoChanged: (isChanged: boolean) => void;
};

const OptionsButton: React.FC<Props> = ({videoChanged, setVideoChanged}) => {
    const [toggle, setToggle] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [currentVideoOption, setCurrentVideoOption] = useState(null as VideoOption | null);

    const openModal = (videoOption: VideoOption) => {
        setCurrentVideoOption(videoOption);
        setModalOpen(true);
    };

    return (
        <>
            {currentVideoOption ?
                <ConfirmationModal
                    actionTitle={currentVideoOption.title}
                    modalOpen={modalOpen}
                    setModalOpen={setModalOpen} onConfirm={() => currentVideoOption.onSubmit()}
                    videoChanged={videoChanged}
                    setVideoChanged={setVideoChanged}
                /> : null}
            <Form>
                <FormGroup row>
                    <Label
                        for={"DISPLAY_SELECT"}
                        className="h6"
                    >
                        OPTIONS:
                    </Label>
                    <Col>
                        <ButtonDropdown
                            toggle={() => setToggle(!toggle)}
                            isOpen={toggle}
                        >
                            <DropdownToggle
                                color={"primary"}
                                caret
                            >
                                CHOOSE
                            </DropdownToggle>
                            <DropdownMenu>
                                {videoOptions.map((option, index) => {
                                    return (
                                        <DropdownItem
                                            key={"videoOption_" + index}
                                            onClick={() => openModal(option)}
                                            className="justify-content-center align-items-center"
                                        >
                                            <option.icon/>
                                            {option.title}
                                        </DropdownItem>
                                    );
                                })}
                            </DropdownMenu>
                        </ButtonDropdown>
                    </Col>
                </FormGroup>
            </Form>
        </>
    );
};

export default OptionsButton;
