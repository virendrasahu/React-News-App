import React from "react";

const Card = ({ data }) => {
    const readMore = (url) => {
        window.open(url);
    };

    return (
        <div className="cardContainer">
            {data.map((curItem, index) => {
                if (!curItem.urlToImage) {
                    return null; // Skip rendering this item
                } else {
                    return (
                        <div className="card" key={index}>
                            <img src={curItem.urlToImage} alt={curItem.title || "News thumbnail"} />
                            <div className="content">
                                <h1 className="title" onClick={() => readMore(curItem.url)}>{curItem.title}</h1>
                                <p>{curItem.description}</p>
                                <button className="button" onClick={() => readMore(curItem.url)}>Read More</button>
                            </div>
                        </div>
                    );
                }
            })}
        </div>
    );
};

export default Card;
