import React, { Component, useState } from 'react'
import Header from '../../shared/header/header';
import { useParams, Link } from 'react-router-dom';
import './allProducts.scss';
import ProductDetail from './productDetail';
export default function Products() {

    let { id } = useParams();
    const [inProductClicked, setInProductClicked] = useState(false);
    const onProductClicked = () => {
        setInProductClicked(true);
        console.log("id" + id);
    }

    return (

        <div className="bg-color">
            <Header />
            <div className="detail-outer">
                <h2><span>{id}</span></h2>
                <div style={{ marginTop: "30px" }}>
                    <div><button className="detail-button" onClick={onProductClicked}>Mechanical</button></div>
                    <div><button className="detail-button" onClick={onProductClicked}>Electronics</button></Link></div>
                    <div><button className="detail-button" onClick={onProductClicked}>Electrical</button></Link></div>
                    <div><button className="detail-button" onClick={onProductClicked}>Testing</button></Link></div>
                    <div><button className="detail-button" onClick={onProductClicked}>Product Accessories and Peripherals</button></Link></div>
                </div>
                {inProductClicked && <ProductDetail />}
            </div>
        </div>
    )
}

