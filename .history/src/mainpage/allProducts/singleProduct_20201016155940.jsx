import React, { Component, useState } from 'react'
import Header from '../../shared/header/header';
import { useParams, Link } from 'react-router-dom';
import './allProducts.scss';
import ProductDetail from './productDetail';
export default function Products() {

    let { id } = useParams();
    const [inProductClicked, setInProductClicked] = useState(false);
    const selected_detail = '';
    const onProductClicked = (variable) => {
        setInProductClicked(true);
        console.log("id" + id);

    }

    return (

        <div className="bg-color">
            <Header />
            <div className="detail-outer">
                <h2><span>{id}</span></h2>
                <div className="detail-inner">
                    <div><button className="detail-button" onClick={onProductClicked(Mechanical)}>Mechanical</button></div>
                    <div><button className="detail-button" onClick={onProductClicked}>Electronics</button></div>
                    <div><button className="detail-button" onClick={onProductClicked}>Electrical</button></div>
                    <div><button className="detail-button" onClick={onProductClicked}>Testing</button></div>
                    <div><button className="detail-button" onClick={onProductClicked}>Product Accessories and Peripherals</button></div>
                </div>
                <div className="category-outer">
                    {inProductClicked && <ProductDetail />}
                </div>
            </div>
        </div>
    )
}

