import React, {useState} from "react";
import {Button, Col, Input, InputGroup, Spinner} from "reactstrap";

type Props = {
    buttonText: string;
    inputPlaceHolder: string;
    searchInput: string;
    setSearchInput: (input: string) => void;
    checkVideo: (url: string) => void;
};

const InputBox: React.FC<Props> = ({buttonText, inputPlaceHolder, searchInput, setSearchInput, checkVideo}) => {
    const [buttonClicked, setButtonClicked] = useState(false);

    const getButtonText = () => {
        if (buttonClicked) {
            return "Processing...";
        }
        return buttonText;
    };

    const getButtonSpinner = () => {
        return buttonClicked && <Spinner size="sm"/>;
    };

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newInput: string = event.target.value || "";
        if (newInput) {
            setSearchInput(newInput);
        }
    };

    const handleClickButton = () => {
        setButtonClicked(true);
        checkVideo(searchInput);
        setButtonClicked(false);
    };

    return (
        <Col>
            <InputGroup size="lg">
                <Input
                    placeholder={inputPlaceHolder}
                    onChange={handleChangeInput}
                    value={searchInput}
                    disabled={buttonClicked}
                />
                <Button
                    color="primary"
                    onClick={() => handleClickButton()}
                    disabled={buttonClicked}
                >
                    {getButtonText()}
                    {getButtonSpinner()}
                </Button>
            </InputGroup>
        </Col>
    );
};

export default InputBox;
