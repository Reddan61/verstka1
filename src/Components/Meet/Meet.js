import React, {useReducer} from "react";
import "./Meet.css";
import stars from "../../Assets/images/Meet/stars.png"
import map from "../../Assets/images/Meet/map.png"
import man from "../../Assets/images/Meet/man.png"
import invisibleArrow from "../../Assets/images/Meet/invisibleArrow.png"
import visibleArrow from "../../Assets/images/Meet/visibleArrow.png"
import {Reducer} from "./reducer/reducer";

import human1 from "../../Assets/images/Meet/man.png"
import human2 from "../../Assets/images/Meet/human.png"
import human3 from "../../Assets/images/Meet/human2.png"

let initialState = {
    step: 0,
    sliderArray: [
        {
            fullname: "Zoltan Nemeth",
            position: "CEO of Pixler Lab",
            avatar: human1
        },
        {
            fullname: "Test1",
            position: "CEO1",
            avatar: human2
        },
        {
            fullname: "Test2",
            position: "CEO2",
            avatar: human3
        }
    ]
};




const Meet = () => {
    const [state,dispatch] = useReducer(Reducer,initialState);

    return <div className={"meet"}>
        <div className={"meet__body"}>
            <div className={"meet__img"}>
                <img src={map} alt="image"/>
            </div>
            <div className={"meet__main"}>
                <div className={"meet__intro intro"}>
                    <div className={"intro__title"}>
                        Meet Client Satisfaction
                        by using product
                    </div>
                    <div className={"intro__text"}>
                        The rise of mobile devices transforms the way we consume.
                        elevant channels such as Facebook.
                    </div>
                </div>
                <div className={"meet__stars"}>
                    <img src={stars} alt=""/>
                </div>
                <div className={"meet__about about"}>
                    <div className={"about__title"}>
                        User friendly & Customizable
                    </div>
                    <div className={"about__text"}>
                        Bring to the table win-win survival strategies to ensure proactive domination. At the end of the
                        day, going forward, a new normal that has evolved from generation X is on the runway heading
                        towards a streamlined cloud solution. User generated content in real-time will have multiple
                        touchpoints for offshoring.
                    </div>
                </div>
                <div className={"meet__slider slider"}>
                    <div className={"slider__img"}>
                        <img src={state.sliderArray[state.step].avatar} width = "100%" alt="man" />
                    </div>
                    <div className={"slider__main"}>
                        <div className={"slider__fullname"}>{state.sliderArray[state.step].fullname}</div>
                        <div className={"slider__position"}>{state.sliderArray[state.step].position}</div>
                    </div>
                    <div className={"slider__arrows"}>
                        <div className={`leftArrow ${state.step - 1 < 0?'':"leftArrow_active"}`}
                            onClick={() => {
                                dispatch({type:"MINUSSTEP"})
                            }}
                        >
                            <img src={state.step - 1  < 0?invisibleArrow:visibleArrow}  alt="arrow"/>
                        </div>
                        <div className={"slider__stick"}>
                        </div>
                        <div className={`rightArrow ${state.step + 1 === state.sliderArray.length ?'':"rightArrow_active"}`}
                            onClick={() => {
                                dispatch({type:"PLUSSTEP"})
                            }}
                        >
                            <img src={state.step + 1 === state.sliderArray.length ?invisibleArrow:visibleArrow} alt="arrow"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
};

export default Meet;