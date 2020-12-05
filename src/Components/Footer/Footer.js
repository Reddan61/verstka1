import React from "react";
import "./Footer.css";

const Footer = () => {
    return <footer>
        <div className={"footer__body"}>
            <div className={"footer__logo logo"}>
                <span className={"logo__app"}>App</span><span className={"logo__lab"}>Lab</span>
            </div>
            <nav className={"nav footer__nav"}>
                <a href="#" className={"nav__link"}>Home</a>
                <a href="#" className={"nav__link"}>Key Features</a>
                <a href="#" className={"nav__link"}>Pricing</a>
                <a href="#" className={"nav__link"}>Testiminial</a>
                <a href="#" className={"nav__link"}>FAQ</a>
            </nav>
            <div className={"footer__links"}>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-github-square"></i>
            </div>
            <div className={"footer__copyright"}>Copyright© Arifur Rahman Tushar 2019. All rights reserved</div>
        </div>
    </footer>
};

export default Footer;