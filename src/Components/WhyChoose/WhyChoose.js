import React from "react";
import "./WhyChoose.css"
import Item from "../Item/Item";
import computer from "../../Assets/images/why/computer.png"
import customerService from "../../Assets/images/why/customer-service.png"
import customerSupport from "../../Assets/images/why/customer-support.png"
import trophy from "../../Assets/images/why/trophy.png"
import ui from "../../Assets/images/why/ui.png"
import webDesign from "../../Assets/images/why/web-design.png"

const WhyChoose = () => {
    return <div className={"why"}>
        <div className={"why__body"}>
            <div className={"why__intro"}>
                <div className={"why__title"}>
                    Why you should choose our app
                </div>
                <div className={"why__text"}>
                    The rise of mobile devices transforms the way we consume information entirely
                    and the world's most elevant channels such as Facebook.
                </div>
            </div>
            <div className={"why__items"}>
                <div className={"why__row"}>
                    <Item opacity = {"0.8"} colorRGB={"255,236,239"} img = {webDesign} title={"App Development"}
                                 text={"Get your blood tests delivered at\n" +
                                 "home collect a sample from the\n" +
                                 "news your blood tests."}/>
                    <Item  opacity = {"0.8"} colorRGB={"234,249,255"} img = {trophy} title={"10 Times Award"}
                                 text={"Get your blood tests delivered at\n" +
                                 "home collect a sample from the\n" +
                                 "news your blood tests."}/>
                    <Item opacity = {"0.8"} colorRGB={"255,246,211"} img = {computer} title={"Cloud Storage"}
                                 text={"Get your blood tests delivered at\n" +
                                 "home collect a sample from the\n" +
                                 "news your blood tests."}/>
                </div>
                <div className={"why__row"}>
                    <Item  opacity = {"0.8"} colorRGB={"228,255,238"} img = {customerSupport} title={"Customization"}
                                 text={"Get your blood tests delivered at\n" +
                                 "home collect a sample from the\n" +
                                 "news your blood tests."}/>
                    <Item  opacity = {"0.8"} colorRGB={"244,244,255"} img = {ui} title={"UX Planning"}
                                 text={"Get your blood tests delivered at\n" +
                                 "home collect a sample from the\n" +
                                 "news your blood tests."}/>
                    <Item opacity = {"0.8"} colorRGB={"253,238,228"} img = {customerService} title={"Customer Support"}
                                 text={"Get your blood tests delivered at\n" +
                                 "home collect a sample from the\n" +
                                 "news your blood tests."}/>
                </div>
            </div>
        </div>
    </div>
};


export default WhyChoose;