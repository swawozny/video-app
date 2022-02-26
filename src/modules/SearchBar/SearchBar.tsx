import {useState} from "react";
import {Container, Row} from "reactstrap";
import {CloudArrowDownFill, Speedometer} from "react-bootstrap-icons";

import Section from "../../components/SearchBar/Section";
import Header from "../../components/SearchBar/Header";
import InputBox from "../../components/SearchBar/InputBox";
import AlertBox from "../../components/SearchBar/AlertBox";
import {VideoService} from "../../services/VideoService/VideoService";

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const [videoAdded, setVideoAdded] = useState(null as null | boolean);

    const checkVideo = (videoUrl: string) => {
        setVideoAdded(null);
        const videoServiceId: number = VideoService.getVideoServiceId(videoUrl);
        const isVideoAdded: boolean = videoServiceId !== -1;
        if (isVideoAdded) {
            VideoService.addVideo({url: videoUrl, serviceId: videoServiceId});
            setSearchInput("");
        }
        setVideoAdded(isVideoAdded);
    };

    return (
        <Container>
            <Row
                xs="1"
                className="m-2 p-2"
            >
                <Header
                    title={"Store your favorite videos"}
                    description={"Below you can paste a link to your favorite movie and add it to your saved files."}
                />
                <AlertBox videoAdded={videoAdded}/>
                <InputBox
                    buttonText={"Add"}
                    inputPlaceHolder={"Enter video url..."}
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                    checkVideo={checkVideo}
                />
                <Row
                    xs="1"
                    md="2"
                    className="mt-4"
                >
                    <Section
                        title={"Quick and easy"}
                        description={"You can save videos with full or shortened link from any video site."}
                        icon={<Speedometer/>}
                    />
                    <Section
                        title={"Store forever"}
                        description={"Your saved videos will stay here until you decide to delete them yourself."}
                        icon={<CloudArrowDownFill/>}
                    />
                </Row>
            </Row>
        </Container>
    );
};

export default SearchBar;
