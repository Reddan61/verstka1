import React from "react";
import "./Features.css";
import Item from "../Item/Item";
import speed from "../../Assets/images/Function/icon1.png"
import proto from "../../Assets/images/Function/icon2.png"
import vector from "../../Assets/images/Function/icon3.png"
import phone from "../../Assets/images/Features/Group 90.png"

const Features = () => {
    return <div className={"features"}>
        <div className={"features__container"}>
            <div className={"features__phone"}>
                <img src={phone} alt={"phone"}/>
            </div>
            <div className={"features__main"}>
                <div className={"features__intro"}>
                    <div className={"features__title"}>
                        Awesome apps
                        features
                    </div>
                    <div className={"features__text"}>
                        Increase productivity with a simple to-do app. app for
                        managing your personal budgets.
                    </div>
                </div>
                <div className={"features__items"}>
                    <Item opacity={"0.2"} img={speed} colorRGB={"245,87,103"} title={"Fast Performance"}
                          text={'Get your blood tests delivered at\n' +
                          'home collect a sample from the\n' +
                          'news your blood tests.'}/>
                    <Item opacity={"0.2"} img={proto} colorRGB={"37,99,255"} title={"Prototyping"}
                          text={'Get your blood tests delivered at\n' +
                          'home collect a sample from the\n' +
                          'news your blood tests.'}/>
                    <Item opacity={"0.2"} img={vector} colorRGB={"64,151,95"} title={"Vector Editing"}
                          text={'Get your blood tests delivered at\n' +
                          'home collect a sample from the\n' +
                          'news your blood tests.'}/>
                </div>
            </div>
        </div>
    </div>
};


export default Features;