import React, {useState} from "react";
import "./Quest.css"
import {CSSTransition} from 'react-transition-group'

const Quest = (props) => {
    let [isOpen, setOpen] = useState(false);

    return <div className={`quest ${isOpen ? "quest_active" : ""}`}>
        <CSSTransition classNames={"option"} in={isOpen} timeout = {1000}>
            <div className={"quest__body"}>
                <div className={"quest__title"}>
                    {props.title}
                </div>
                {isOpen && (
                    <div className={"quest__text"}>{props.text}</div>
                )
                }

                {!isOpen && <div className={"quest__plus"} onClick={() => {
                    setOpen(true)
                }}>
                </div>}

            </div>
        </CSSTransition>
    </div>
};


export default Quest;