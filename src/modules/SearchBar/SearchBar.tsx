import {Container, Row} from "reactstrap";
import {CloudArrowDownFill, Speedometer} from "react-bootstrap-icons";

import Section from "../../components/SearchBar/Section";
import Header from "../../components/SearchBar/Header";
import InputBox from "../../components/SearchBar/InputBox";

const SearchBar = () => {
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
                <InputBox
                    buttonText={"Add"}
                    inputPlaceHolder={"Enter video url..."}
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
