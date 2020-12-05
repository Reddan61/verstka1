import React from "react";
import "./Header.css"
import phone from "../../Assets/images/phone.png"
import trophyIcon from "../../Assets/images/trophyIcon.png"
import city from "../../Assets/images/city.png"

const Header = () => {
    return <div className={"header"}>
        <div className={"header__top"}>
            <div className={"header__logo logo"}>
                <span className={"logo__app"}>App</span><span className={"logo__lab"}>Lab</span>
            </div>
            <nav className={"nav"}>
                <a href="#" className={"nav__link"}>Home</a>
                <a href="#" className={"nav__link"}>Key Features</a>
                <a href="#" className={"nav__link"}>Pricing</a>
                <a href="#" className={"nav__link"}>Testiminial</a>
                <a href="#" className={"nav__link"}>FAQ</a>
                <a className={"btn nav__btn"}>Try for free</a>
            </nav>

        </div>
        <div className={"header__main"}>
            <div className={"container"}>
                <div className={"header__intro intro"}>
                    <div className={"intro__trophy trophy"}>
                        <div className={"trophy__icon"}>
                            <img src={trophyIcon} alt="icon"/>
                        </div>
                        <span>#1 Editiors Choice App of 2020</span>
                    </div>
                    <div className={"intro__title"}>Best app for your
                        modern lifestyle
                    </div>
                    <div className={"intro__text"}>
                        Increase productivity with a simple to-do app. app for
                        managing your personal budgets.
                    </div>
                    <div className={"intro__links"}>
                        <a className={"btn intro__btn"}>Try for free</a>
                        <a className={"intro__link"}>Watch demo video</a>
                    </div>
                </div>
                <div className={"header__phone"}>
                    <img src={phone} alt={"phone"}/>
                </div>
            </div>

        </div>



    </div>
};


export default Header;


{/*
<div className={"city"}>
    <img src={city} alt="city"/>
</div>*/}
