import React from "react";
import "./Questions.css";
import Quest from "./Quest/Quest";
import {TransitionGroup} from "react-transition-group";


const Questions = () => {
    return <div className={"questions"}>
        <div className={"questions__body"}>
            <div className={"questions__intro intro"}>
                <div className={"intro__title"}>Frequently asked questions</div>
                <div className={"intro__text"}>The rise of mobile devices transforms the way we consume information
                    entirely
                    and the world's most elevant channels such as Facebook.
                </div>
            </div>
            <div className={"questions__items"}>
                <Quest title={"How to contact with riders emergency?"}
                       text={"Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."}/>
                <Quest title={"App installation failed, how to update system information?"}
                       text={"Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."}/>
                <Quest title={"Website reponse taking time, how to improve?"}
                       text={"Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."}/>
                <Quest title={"New update fixed all bug and issues"}
                       text={"Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."}/>
                <Quest title={"How to contact with riders emergency?"}
                       text={"Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment."}/>

            </div>
        </div>
    </div>
};


export default Questions;