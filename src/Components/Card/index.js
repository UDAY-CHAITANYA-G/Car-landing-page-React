import React,{useState,useEffect} from "react";
import {FiHeart} from "react-icons/fi"
import {FaTachometerAlt, FaChargingStation, FaUsers, FaCar} from "react-icons/fa";

import "./styles.css";

const IMAGES=["https://img.freepik.com/premium-photo/bangkok-thailand-08082022-lamborghini-luxury-super-car-fast-sports-premium-lighting-background-3d-illustration_67092-1599.jpg","https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/2020-Chevrolet-Corvette-Stingray/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=960","https://cdn.motor1.com/images/mgl/g440ng/s3/rimac-nevera.jpg"]

export default function Card({car,...props}){

    const [index,setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
          setIndex((index) => (index + 1) % IMAGES.length);
        }, 2000);
    
        return () => {
          clearInterval(intervalId);    
        };
      }, []);

    return (
    <div className="Car-box">
        <div className="Car-image-box">
            <img src={IMAGES[index]}></img>
        </div>
        <div className="Car-details">
            <div className="Car-name">
                <h3>{car.Name}</h3>
                <a>{car.year}</a>
            </div>
            <div className="car-specifications">
                <div className="car1-specifications">
                    <a><FaUsers /> {car.capacity} People</a>
                    <a><FaChargingStation />  {car.type}</a>
                </div>
                <div className="car2-specifications">
                    <a><FaTachometerAlt />  {car.mileage}</a>
                    <a><FaCar /> {car.mode}</a>
                </div>
            </div>
        </div>
        <div className="car-rent-details">
            <div className="car-rent-money">
                <h3>${car.rentPrice}</h3>
                <a>/month</a>
            </div>
            <div className="car-rent-now-button">
                <FiHeart />
                <a>Rent now</a>
            </div>
        </div>
    </div>
    );
}