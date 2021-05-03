import React, { useState } from 'react'
import MidHeader from '../../shared/midHeader/midHeader';
import Header from "../../shared/header/header";
import { Link } from 'react-router-dom';
import SingleLegal from './SingleLegal';


export default function Legal() {
     // var user_type = localStorage.getItem('user-type');
     const [inProductClicked, setInProductClicked] = useState(false);
     var segment = localStorage.getItem('segment');
     const arr1 = ["Digital Signature", "Purchase Order", "Document Management", 
     "Contract Management", "Reporting"];
 
     const onProductClicked = (event) => {
         setInProductClicked(true);
         console.log("Product:" + inProductClicked);
     }
 
     return (
         <div className="bg-color">
             <Header />
             <div className="products-outer">
                 <MidHeader />
                         <h2><span><a href="/legal/">Legal</a></span></h2>
                 <div className="products-parent">
                     {arr1.map((cat, index) => {
                         if (segment === "All") {
                             return (
                                 <div className="products-inner" key={index}>
                                     <Link to={`/legal/${cat}`} style={{ color: "black" }}>
                                         <button onClick={onProductClicked} className="product-button">{cat}
                                         </button>
                                     </Link></div>
                             )
                         }
                         else if (segment.toLowerCase() === cat.toLowerCase()) {
                             return (
                                 <div className="products-inner">
                                     <Link to={`/legal/${cat}`} style={{ color: "black" }}>
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
             {inProductClicked && <SingleLegal />}

 
         </div>
 
     )
}
