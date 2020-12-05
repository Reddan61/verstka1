import React from "react";
import "./Ultimate.css"
import Item from "../Item/Item"
import phone from "../../Assets/images/Ultimate/phone.png"
import webDesign from "../../Assets/images/Ultimate/web-design.png"
import ui from "../../Assets/images/Ultimate/ui.png"
import customerService from "../../Assets/images/Ultimate/customer-service.png"
import computer from "../../Assets/images/Ultimate/computer.png"


const Ultimate = () => {
    return <div className={"ultimate"}>
        <div className={"ultimate__body"}>
            <div className={"ultimate__main"}>
                <div className={"ultimate__intro"}>
                    <div className={"ultimate__title"}>
                        Ultimate features that we built
                    </div>
                    <div className={"ultimate__text"}>
                        The rise of mobile devices transforms the way we
                        consume information entirely.
                    </div>
                </div>
                <div className={"ultimate__items"}>
                    <div className={"ultimate__row"}>
                        <Item img={webDesign} colorRGB={"255,236,239"} opacity={"0.6"} title={"App Development"}
                              text={"Get your blood tests delivered at\n" +
                              "home collect a sample from the\n" +
                              "news your blood tests."}/>
                        <Item img={ui} colorRGB={"228,255,238"} opacity={"0.6"}
                              title={"UX Planning"}
                              text={"Get your blood tests delivered at\n" +
                              "home collect a sample from the\n" +
                              "news your blood tests."}/>
                    </div>
                    <div className={"ultimate__row"}>
                        <Item img={computer} colorRGB={"255,246,211"}
                              opacity={"0.6"}
                              title={"Cloud Storage"}
                              text={"Get your blood tests delivered at\n" +
                              "home collect a sample from the\n" +
                              "news your blood tests."}/>
                        <Item img={customerService} colorRGB={"244,244,255"}
                              opacity={"0.6"}
                              title={"Customer Support"}
                              text={"Get your blood tests delivered at\n" +
                              "home collect a sample from the\n" +
                              "news your blood tests."}/>
                    </div>
                </div>
                <div>
                    <a className={"btn ultimate__btn"}>See all</a>
                </div>
            </div>
            <div className={"ultimate__image"}>
                <img src={phone} alt="img"/>
            </div>
        </div>
    </div>
};


export default Ultimate;