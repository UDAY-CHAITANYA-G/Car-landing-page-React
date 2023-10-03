import React from "react";

import "./styles.css";

export default function Card(props){
    return (
    <div className="Car-box">
        <div className="Car-image-box"></div>
        <div className="Car-details">
            <div className="Car-name">
                <h3>Toyota RAV4</h3>
                <a>2021</a>
            </div>
            <div className="car-specifications">
                <div className="car1-specifications">
                    <a>4 People</a>
                    <a>Hybrid</a>
                </div>
                <div className="car2-specifications">
                    <a>6.1km/1-litre</a>
                    <a>Automatic</a>
                </div>
            </div>
        </div>
        <div className="car-rent-details">
            <div className="car-rent-money">
                <h3>$440</h3>
                <a>/month</a>
            </div>
            <div className="car-rent-now-button">
                <a>L</a>
                <a>Rent now</a>
            </div>
        </div>
    </div>
    );
}