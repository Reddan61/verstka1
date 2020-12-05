import React from "react";
import "./Jackpots.css"
import Item from "../Item/Item";
import bill from "../../Assets/images/Advantage/bill.png"
import badge from "../../Assets/images/Advantage/badge.png"
import network from "../../Assets/images/Advantage/network.png"


const Jackpots = () => {
    return <div className={"jackpots"}>
        <div className={"jackpots__body"}>
            <div className={"jackpots__intro"}>
                <div className={"jackpots__title"}>
                    Smart jackpots that you may love this anytime & anywhere
                </div>
                <div className={"jackpots__stick"}>

                </div>
                <div className={"jackpots__text"}>
                    The rise of mobile devices transforms the way we
                    consume information entirely and the world's most
                    elevant channels such as Facebook.
                </div>
            </div>
            <div className={"jackpots__advantages"}>
                <Item opacity={"0.1"} colorRGB={"245,87,103"} img={bill} title={"Automatic Payouts"}
                      text={"Get your blood tests delivered at\n" +
                      "home collect a sample from the\n" +
                      "news your blood tests."}/>
                <Item opacity={"0.1"} colorRGB={"37,99,255"} img={network} title={"Network Effect"}
                      text={"Get your blood tests delivered at\n" +
                      "home collect a sample from the\n" +
                      "news your blood tests."}/>
                <Item opacity={"0.1"} colorRGB={"64,151,95"} img={badge} title={"Bigger Rewards Method"}
                      text={"Get your blood tests delivered at\n" +
                      "home collect a sample from the\n" +
                      "news your blood tests."}/>
            </div>
        </div>
    </div>
};


export default Jackpots;