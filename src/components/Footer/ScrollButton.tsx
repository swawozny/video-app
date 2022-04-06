import {useState} from "react";
import {Button} from "reactstrap";
import {ArrowUp} from "react-bootstrap-icons";

import "./ScrollButton.css";

const ScrollButton = () => {
    const [showScrollButton, setShowScrollButton] = useState(false)

    const checkScrollTop = () => {
        const currentPageYOffset: number = window.scrollY;
        if (!showScrollButton && currentPageYOffset > 100) {
            setShowScrollButton(true)
        } else if (showScrollButton && currentPageYOffset <= 100) {
            setShowScrollButton(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    window.addEventListener('scroll', checkScrollTop);

    return (
        <Button
            onClick={scrollToTop}
            className="scrollTop"
            style={{height: 40, display: showScrollButton ? 'flex' : 'none'}}
        >
            <ArrowUp
            />
        </Button>
    );
};

export default ScrollButton;
