import Header from "../../shared/header/header"
import "./allProducts.scss";
import Products from "./products.jsx"
import React, { Component, useState } from 'react'

export default function AllProducts() {
    const [inClicked, setinputclicked] = useState(false);

    const onclickMethod = () => {
        setinputclicked(true);
        console.log("main:"+inClicked);
    }
    
    return (
        <div>
            <Header />
            <div className="product-columns" onClick={onclickMethod}>
                Products
            </div>
            {inClicked && <div style={{float: "left"}}><Products /></div>}
        </div>
    )
}
