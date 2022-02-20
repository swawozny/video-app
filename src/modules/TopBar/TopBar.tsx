import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";
import {useState} from "react";

import {PersonVideo2} from "react-bootstrap-icons";
import pages from "../../pages/pages";

const TopBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <Navbar
                color="primary"
                dark
                expand="md"
                full
            >
                <NavbarBrand
                    className="me-auto"
                    href="/"
                >
                    <PersonVideo2 className="m-1"/>
                    VideoApp
                </NavbarBrand>
                <NavbarToggler
                    className="me-2"
                    onClick={() => {
                        setIsOpen(!isOpen)
                    }}
                />
                <Collapse
                    isOpen={isOpen}
                    navbar
                >
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        {pages.map((page, index) => {
                            return (
                                <NavItem>
                                    <NavLink href={page.path}>
                                        {page.title}
                                    </NavLink>
                                </NavItem>
                            );
                        })}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default TopBar;
