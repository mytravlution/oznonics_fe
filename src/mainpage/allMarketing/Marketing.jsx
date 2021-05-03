import React, { useState } from 'react'
import MidHeader from '../../shared/midHeader/midHeader';
import Header from "../../shared/header/header";
import { Link } from 'react-router-dom';
import SingleMarketing from './SingleMarketing';



export default function Marketing() {
     // var user_type = localStorage.getItem('user-type');
     const [inProductClicked, setInProductClicked] = useState(false);
     var segment = localStorage.getItem('segment');
     const arr1 = ["Website", "Social Media", "Online", "Offline", "Email Marketing","Print Edvertising"];
 
     const onProductClicked = (event) => {
         setInProductClicked(true);
         console.log("Product:" + inProductClicked);
     }
 
     return (
         <div className="bg-color">
             <Header />
             <div className="products-outer">
                 <MidHeader />
                         <h2><span><a href="/marketing/">Marketing</a></span></h2>
                 <div className="products-parent">
                     {arr1.map((cat, index) => {
                         if (segment === "All") {
                             return (
                                 <div className="products-inner" key={index}>
                                     <Link to={`/marketing/${cat}`} style={{ color: "black" }}>
                                         <button onClick={onProductClicked} className="product-button">{cat}
                                         </button>
                                     </Link></div>
                             )
                         }
                         else if (segment.toLowerCase() === cat.toLowerCase()) {
                             return (
                                 <div className="products-inner">
                                     <Link to={`/marketing/${cat}`} style={{ color: "black" }}>
                                         <button onClick={onProductClicked} className="product-button">{cat}
                                         </button>
                                     </Link></div>
                             )
                         } else {
                             return (
                                 <div> </div>
                             )
                         }
                     })}
                   </div>
             </div>
             {inProductClicked && <SingleMarketing />}

 
         </div>
 
     )
}
