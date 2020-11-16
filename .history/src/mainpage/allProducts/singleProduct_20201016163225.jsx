import React, { Component, useState } from 'react'
import Header from '../../shared/header/header';
import { useParams, Link } from 'react-router-dom';
import './allProducts.scss';
import ProductDetail from './productDetail';
export default function Products() {

    let { id } = useParams();
    const [inProductClicked, setInProductClicked] = useState(false);
    const category ='sample';
    const onProductClicked = (event) => {
        setInProductClicked(true);
        console.log("id" + id);
        // this.category = event.target.value;
        console.log("category:"+event.target.value);
        
    }

    return (

        <div className="bg-color">
            <Header />
            <div className="detail-outer">
                <h2><span>{id}</span></h2>
                <div className="detail-inner">
                    <div><button className="detail-button" value = 'mechanical' id='1' onClick={e => onProductClicked(e)}>Mechanical</button></div>
                    <div><button className="detail-button" value = "electronics" onClick={onProductClicked}>Electronics</button></div>
                    <div><button className="detail-button" value ="electrical" onClick={onProductClicked}>Electrical</button></div>
                    <div><button className="detail-button" value ="testing" onClick={onProductClicked}>Testing</button></div>
                    <div><button className="detail-button" value ="peripherals" onClick={onProductClicked}>Product Accessories and Peripherals</button></div>
                </div>
                <div className="category-outer">
                    {inProductClicked && <ProductDetail detailselected={category}/>}
                </div>
            </div>
        </div>
    )
}

