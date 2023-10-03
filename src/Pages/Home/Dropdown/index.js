import React from "react";

import "./styles.css";

export default function Dropdown(){
    return <div>
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
}