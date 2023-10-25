import React, { useState } from 'react';





const MyHeader = () => {

     const [selected , setSeleted] = useState(false);
    
    return (
        <div >
            <nav>
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="checkbtn"><button  onClick={()=>setSeleted(!selected)}> { !selected ? <p> &#9776; </p> : <img src="./assets/image/whiteCross.png" style={{marginTop:"20px"}} width="20px" height="20px" />}  </button>   </label>
                <div className="logo">
                    <p >WORKOUT </p>
                </div>
                <ul>
                    <li><a href="#">WORKOUTS</a> </li>
                    <li><a href="#">PROGRAMS </a> </li>
                    <li><a href="#">HEALTHY LIVING </a> </li>
                    <li><a href="#">COMMUNITY </a> </li>
                    <li><a href="#">ABOUT </a> </li>
                    <li><a href="#">STORE </a> </li>
                </ul>
            </nav>

        </div>
    );
};

export default MyHeader;