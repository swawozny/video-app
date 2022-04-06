import ScrollButton from "../../components/Footer/ScrollButton";

const Footer = () => {
    return (
        <footer className="text-center text-lg-start bg-light text-secondary fw-bold mt-auto">
            <div className="border-top mt-2">
            </div>
            <div
                className="text-center p-4"
                style={{backgroundColor: "rgba(0, 0, 0, 0.05)"}}
            >
                © 2022 VideoAPP
                <div className="d-flex flex-column align-items-end">
                <ScrollButton/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
