import React from "react";
import "./Designed.css";
import img from "../../Assets/images/Designed/designedImg.png"

const Designed = () => {
    return <div className={"designed"}>
        <div className={"designed__body"}>
            <div className={"designed__img"}>
                <img src={img} alt="img"/>
            </div>
            <div className={"designed__intro"}>
                <div className={"designed__title"}>
                    Designed & built by the latest code integration
                </div>
                <div className={"designed__text"}>
                    The rise of mobile devices transforms the way we
                    consume information entirely and the world's most
                    elevant channels such as Facebook.
                </div>
                <a className={"btn designed__btn"}>Learn more</a>
            </div>
        </div>
    </div>
};


export default Designed;