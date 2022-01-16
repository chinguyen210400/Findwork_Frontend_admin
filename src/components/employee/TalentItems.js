import React, {useState} from "react";
import "./TalentItems.css";

function TalentItems (props) {
    return (
        <>
        <li className='talent_item'>
            <div className='talent_item_info'>
            <div className='talent_item_image'>
                <img src="/" className="talent_item_img" width="200" height="200"/>
            </div>
            <div className='talent_item_title'  >
                <h5  className='talent_item_text'>{props.text1}</h5>
                <p className='talent_item_text'>{props.text2}</p> 
                <p className='talent_item_text'><i class="fa fa-star" aria-hidden="true"></i></p>
            </div> 
            </div> 
        </li>
        </>
    
    );
}

export default TalentItems;