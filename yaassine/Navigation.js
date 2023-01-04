import React from "react";
import {Link} from "react-router-dom";

export default function Navigation(){
    return (
        <div className="sis"> 
         <ul>  
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
        </ul>   
       </div> 
      );
}