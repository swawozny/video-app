import {useState} from "react";
import {Link} from "react-router-dom";
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap";
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
            >
                <Link
                    className="text-decoration-none"
                    to="/"
                >
                    <NavbarBrand className="me-auto">
                        <PersonVideo2 className="m-1"/>
                        VideoApp
                    </NavbarBrand>
                </Link>
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
                                <Link
                                    className="text-decoration-none"
                                    to={page.path}
                                >
                                    <NavItem key={"navItem_" + index}>
                                        <NavLink>
                                            {page.title}
                                        </NavLink>
                                    </NavItem>
                                </Link>
                            );
                        })}
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default TopBar;
