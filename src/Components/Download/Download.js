import React from "react";
import "./Download.css";
import img from "../../Assets/images/Download/img.png";
import google from "../../Assets/images/Download/google.png"
import app from "../../Assets/images/Download/app.png"

const Download = () => {
    return <div className={"download"}>
        <div className={"download__body"}>
            <div className={"download__main"}>
                <div className={"download__container"}>
                    <div className={"download__intro intro"}>
                        <div className={"intro__title"}>
                            Download our App now !
                        </div>
                        <div className={"intro__text"}>
                            The rise of mobile devices transforms the way we consume information entirely
                            and the world's most elevant channels such as Facebook.
                        </div>
                    </div>
                    <div className={"download__suppliers"}>
                        <img src={google} alt="google"/>
                        <img src={app} alt="appStore"/>
                    </div>
                </div>
            </div>
            <div className={"download__img"}>
                <img src={img} alt="img"/>
            </div>
        </div>
    </div>
};


export default Download;