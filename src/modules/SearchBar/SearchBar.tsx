import {useState} from "react";
import {Container, Row} from "reactstrap";
import {CloudArrowDownFill, FunnelFill, Speedometer, StarFill} from "react-bootstrap-icons";

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
        VideoService.checkLink(videoUrl)
            .then((linkCorrect) => {
                if (linkCorrect) {
                    VideoService.addVideo(videoUrl);
                    setSearchInput("");
                    setVideoAdded(true);
                } else {
                    setVideoAdded(false);
                }
            })
            .catch(() => {
                setVideoAdded(false);
            });
    };

    return (
        <>
            <Container className="bg-light mt-4">
                <Row
                    xs="1"
                    className="m-2 p-4"
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
                </Row>
            </Container>
            <Container className="mt-4 bg-light w-100 mb-4">
                <Row
                    xs="1"
                    md="2"
                    className="m-2 p-4"
                >
                    <Section
                        title={"Quick and easy"}
                        description={"You can save videos with full or shortened link from any video site."}
                        icon={<Speedometer className="mx-1"/>}
                    />
                    <Section
                        title={"Store forever"}
                        description={"Your saved videos will stay here until you decide to delete them yourself."}
                        icon={<CloudArrowDownFill className="mx-1"/>}
                    />
                    <Section
                        title={"Mark favorites"}
                        description={"You can mark the movies of your choice as your favorites."}
                        icon={<StarFill className="mx-1"/>}
                    />
                    <Section
                        title={"Filter movies"}
                        description={"You can filter movies depending on when you added a movie or whether you marked it as favorite."}
                        icon={<FunnelFill className="mx-1"/>}
                    />
                </Row>
            </Container>
        </>
    );
};

export default SearchBar;
