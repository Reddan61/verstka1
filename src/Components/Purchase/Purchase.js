import React from "react";
import "./Purchase.css"

const Purchase = () => {
    return <div className={"purchase"}>
        <div className={"purchase__body"}>
            <div className={"purchase__intro"}>
                <div className={"purchase__title"}>
                    Get awesome features, without
                    extra charges
                </div>
                <div className={"purchase__text"}>
                    The rise of mobile devices transforms the way we consume information entirely
                    and the world's most elevant channels such as Facebook.
                </div>
            </div>
            <div className={"purchase__links"}>
                <a className={"purchase__link"}>Monthly</a>
                <a className={"purchase__link"}>Annually</a>
            </div>
            <div className={"purchase__items"}>
                <div className={"purchase__business purchaseItem"}>
                    <div className={"purchaseItem__header"}>
                        <div className={"purchaseItem__price"}>
                            <div className={"purchaseItem__money"}>$0</div>
                            <div className={"purchaseItem__month"}>/ month</div>
                        </div>
                        <div className={"purchaseItem__title"}>
                            Business Class
                        </div>
                        <div className={"purchaseItem__text"}>
                            For small teams or office
                        </div>
                    </div>
                    <div className={"purchaseItem__main"}>
                        <div className={"purchaseItem__items"}>
                            <ul>
                                <li>Drag & Drop Builder</li>
                                <li>1,000's of Templates</li>
                                <li>Blog Support Tools</li>
                                <li>eCommerce Store</li>
                            </ul>
                        </div>
                        <div className={"purchaseItem__btn"}>
                            <a className={"btn"}>Start free trail</a>
                        </div>
                </div>
                </div>
                <div className={"purchase__master purchaseItem"}>
                    <div className={"purchaseItem__header"}>
                        <div className={"purchaseItem__price"}>
                            <div className={"purchaseItem__money"}>$99</div>
                            <div className={"purchaseItem__month"}>/ month</div>
                        </div>
                        <div className={"purchaseItem__title"}>
                            Pro Master
                        </div>
                        <div className={"purchaseItem__text"}>
                            For Best opportunities
                        </div>
                    </div>
                    <div className={"purchaseItem__main"}>
                        <div className={"purchaseItem__items"}>
                            <ul>
                                <li>Drag & Drop Builder</li>
                                <li>1,000's of Templates</li>
                                <li>Blog Support Tools</li>
                                <li>eCommerce Store</li>
                            </ul>
                        </div>
                        <div className={"purchaseItem__btn"}>
                            <a className={"btn"}>Subscribe Now</a>
                            <a className={"purchaseItem__trialBtn"}>Or Start 14 days trial</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
};


export default Purchase;