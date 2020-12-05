import React from "react";
import icon1 from "../../Assets/images/Trusted/icon1.png"
import icon2 from "../../Assets/images/Trusted/icon2.png"
import icon3 from "../../Assets/images/Trusted/icon3.png"
import icon4 from "../../Assets/images/Trusted/icon4.png"
import icon5 from "../../Assets/images/Trusted/icon5.png"
import "./Trusted.css";

const Trusted = () => {
    return <div className={"trusted"}>
        <div className={"trusted__title"}>
            Trusted by companies like
        </div>
        <div className={"trusted__companies"}>
            <img src={icon1} alt="icon1"/>
            <img src={icon2} alt="icon2"/>
            <img src={icon3} alt="icon3"/>
            <img src={icon4} alt="icon4"/>
            <img src={icon5} alt="icon5"/>
        </div>
    </div>
};

export default Trusted;