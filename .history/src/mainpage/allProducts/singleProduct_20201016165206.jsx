import React, { Component, useState } from 'react'
import Header from '../../shared/header/header';
import { useParams, Link } from 'react-router-dom';
import './allProducts.scss';
import ProductDetail from './productDetail';
export default function Products() {

    let { id } = useParams();
    let {category} = "cetbs";
    const myvar = ""
    const [inProductClicked, setInProductClicked] = useState(false);
    
    const onProductClicked = (event) => {
        setInProductClicked(true);
        console.log("id" + id);
        const abc = event.target.value;
        // category=abc;
        // console.log("category:"+category);
    }

    return (

        <div className="bg-color">
            <Header />
            <div className="detail-outer">
                <h2><span>{id}</span></h2>
                <div className="detail-inner">
                    <div><button className="detail-button" value = 'mechanical' onClick={onProductClicked}>Mechanical</button></div>
                    <div><button className="detail-button" value = "electronics" onClick={onProductClicked}>Electronics</button></div>
                    <div><button className="detail-button" value ="electrical" onClick={onProductClicked}>Electrical</button></div>
                    <div><button className="detail-button" value ="testing" onClick={onProductClicked}>Testing</button></div>
                    <div><button className="detail-button" value ="peripherals" onClick={onProductClicked}>Product Accessories and Peripherals</button></div>
                    <h3>{category}</h3>
                </div>
                
                <div className="category-outer">
                    {inProductClicked && <ProductDetail detailselected={category}/>}
                </div>
            </div>
        </div>
    )
}

