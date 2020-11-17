import React, { Component, useState } from 'react'
import Header from '../../shared/header/header';
import { useParams, Link } from 'react-router-dom';
import './allProducts.scss';
import ProductDetail from './productDetail';
export default function Products() {

    let { id } = useParams();
    let {category} = "cetbs";
    
    const [inProductClicked, setInProductClicked] = useState(false);
    const [selectedDetail, setDetail] = useState("");

    const onProductClicked = (event) => {
        setInProductClicked(true);
        setDetail(event.target.value);
        console.log("id" + inProductClicked);    
        console.log("category:"+selectedDetail);
    }

    return (

        <div className="bg-color">
            <Header />
            <div className="detail-outer">
                <h2><span>{id}</span></h2>
                <div className="detail-inner">
                    <button className="detail-button" value = "mechanical"  id="number" 
                    onMouseEnter={onProductClicked} >Mechanical</button>
                    <button className="detail-button" value = "electronics" onMouseEnter={onProductClicked}>Electronics</button></div>
                    <button className="detail-button" value ="electrical" onMouseEnter={onProductClicked}>Electrical</button></div>
                    <button className="detail-button" value ="testing" onMouseEnter={onProductClicked}>Testing</button></div>
                    <button className="detail-button" value ="peripherals" onMouseEnter={onProductClicked}>Product Accessories and Peripherals</button></div>
                    <h3>{category}</h3>
                </div>
                
                <div >
                    {inProductClicked && <ProductDetail detailselected={selectedDetail}/>}
                </div>
            </div>
        </div>
    )
}
