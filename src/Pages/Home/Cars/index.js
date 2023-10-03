import React from "react";
import Card from "../../../Components/Card";


import "./styles.css";

export default function Cars({cars, ...props}){
    return (
    <div className="car-cards">
        {cars.map((car,index)=>{return <Card car={car} key={index} />})}
    </div>);
}