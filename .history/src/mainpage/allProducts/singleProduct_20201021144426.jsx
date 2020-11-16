import React, { Component, useState } from 'react'
import Header from '../../shared/header/header';
import { useParams, Link } from 'react-router-dom';
import './allProducts.scss';
import ProductDetail from './productDetail';
export default function Products() {

    let { id } = useParams();

    const [inProductClicked, setInProductClicked] = useState(false);
    const [selectedDetail, setDetail] = useState("");
    const [buttonValue, setButtonValue] = useState('');

    const arr1 = ['Mechanical', 'Electronics', 'Electrical', 'Testing', 'Product Accessories and Peripherals'];
    const onProductClicked = (event) => {
        setInProductClicked(true);
        setDetail(event.target.value);
        setButtonValue(event.target.getAttribute("data-index"));

        console.log("id" + inProductClicked);
        console.log("category:" + selectedDetail);
    }

    return (

        <div className="bg-color">
            <Header />
            <div className="detail-outer">
                <h2><span>{id}</span></h2>

                <div className="detail-inner">
                    {arr1.map((cat, index) => {
                        return (
                            <div>
                                {buttonValue.toString() === index.toString() ? "yes":"no"}
                                <button   data-index={index} className={ buttonValue.toString() === index.toString() ? 'detail-button-selected':'detail-button'} value={cat.toLowerCase()}  onClick={onProductClicked}>{cat}</button>
                            </div>
                        )
                    })}
                </div>

                {/* <div className="detail-inner">
                    <button className="detail-button" value="mechanical" onMouseEnter={onProductClicked} >Mechanical</button>
                    <button className="detail-button" value="electronics" onMouseOver={onProductClicked} >Electronics</button>
                    <button className="detail-button" value="electrical" onMouseEnter={onProductClicked}>Electrical</button>
                    <button className="detail-button" value="testing" onMouseEnter={onProductClicked}>Testing</button>
                    <button className="detail-button" value="peripherals" onMouseEnter={onProductClicked}>Product Accessories and Peripherals</button>
                </div> */}

                <div className="category-outer" >
                    {inProductClicked && <ProductDetail detailselected={selectedDetail} />}
                </div>
            </div>
        </div>
    )
}

