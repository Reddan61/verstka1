import React from "react";

const Item = (props) => {
    return <div className={"item"}>
        <div className={"item__body"}>
            <div className={"item__image"} style={{
                backgroundColor: `rgba(${props.colorRGB},${props.opacity})`
            }}>
                <img src={props.img} alt={"img"}/>
            </div>
            <div className={"item__main"}>
                <div className={"item__title"} style={{color: `rgb(${props.color})`}}>
                    {props.title}
                </div>
                <div className={"item__text"}>
                    {props.text}
                </div>
            </div>
        </div>
    </div>
};


export default Item;