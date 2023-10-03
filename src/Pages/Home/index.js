import React from "react";
import Card from "../../Components/Card";
import "./styles.css";


export default function Home(){
    return <div>
        <div className="Search-bar">
            <input type="text" placeholder="Search"></input>
            <div class="dropdown">
                <button class="dropbtn">Relevance</button>
                <div class="dropdown-content">
                    <a href="#">Relevance1</a>
                    <a href="#">Relevance2</a>
                    <a href="#">Relevance3</a>
                </div>
            </div>
            <div class="dropdown">
                <button class="dropbtn">All brands</button>
                <div class="dropdown-content">
                    <a href="#">All brands1</a>
                    <a href="#">All brands2</a>
                    <a href="#">All brands3</a>
                </div>
            </div>
            
        </div>
        <div className="car-cards">
            <Card />
        </div>

        <div className="Pagination">
            <div className="page-view-number">
                <a>6 from 129</a>
            </div>
            <div className="pagination-number">
                <a>1</a>
                <a>2</a>
                <a>3</a>
                <a>.</a>
                <a>10</a>
                <a>11</a>
            </div>
        </div>
    </div>;
}