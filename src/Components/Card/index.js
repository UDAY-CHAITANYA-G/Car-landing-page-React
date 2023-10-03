import React from "react";

import "./styles.css";

export default function Card({car,...props}){
    console.log(car);
    return (
    <div className="Car-box">
        <div className="Car-image-box"></div>
        <div className="Car-details">
            <div className="Car-name">
                <h3>{car.Name}</h3>
                <a>{car.year}</a>
            </div>
            <div className="car-specifications">
                <div className="car1-specifications">
                    <a>{car.capacity} People</a>
                    <a>{car.capacity}</a>
                </div>
                <div className="car2-specifications">
                    <a>{car.mileage}</a>
                    <a>{car.mode}</a>
                </div>
            </div>
        </div>
        <div className="car-rent-details">
            <div className="car-rent-money">
                <h3>{car.rentPrice}</h3>
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