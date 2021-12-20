import React from "react";
import {IoCaretBackCircleOutline ,IoCaretForwardCircleOutline} from "react-icons/io5";


function Box({name ,job ,text ,image , onLeft, onRight , random}) {

    return(
        <div className="tc shadow-5 pa4 container">
            <div>
                <img 
                    className="image"
                    alt={name}
                    src={image} 
                />
            </div>

            <div>
                <h3 className="name">{name}</h3>
                <h5 className="job">{job}</h5>
            </div>

            <div>
                <p className="text ">{text}</p>
            </div>


            <div>
                <button 
                    
                    className="button left grow"
                    onClick={()=> onLeft()}

                ><IoCaretBackCircleOutline/></button>

                <button 
                    className="button right grow"
                    onClick={() => onRight()}
                ><IoCaretForwardCircleOutline/></button>
            </div>


            <button 
            className="button surprise bg-light-blue grow"
            onClick={()=> random()}
            >Surprise Me!!</button>
 
        </div>
    )
}

export default Box;