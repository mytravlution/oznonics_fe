import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from "../../shared/header/header";
import CategoryList from "./productDetail";

export default function Products() {
    const [inProductClicked, setInProductClicked] = useState(false);
    const [ product, setProduct ] = useState('');
    const onProductClicked = (event) => {
        setInProductClicked(true);
        console.log("Product:" + inProductClicked);

    }

    return (


        <div className="bg-color">
            <Header />

            <div className="products-outer">
                <h2><span>Products</span></h2>
                <div className="products-inner"><Link to="/product/HR230" style={{ color: "black" }}><button onClick={onProductClicked} className="product-button" value='HR230' >HR230</button></Link></div>
                <div className="products-inner"><Link to="/product/HR300" style={{ color: "black" }}><button onClick={onProductClicked} className="product-button" value='HR300'  >HR300</button></Link></div>
                <div className="products-inner"><Link to="/product/HR400" style={{ color: "black" }}><button onClick={onProductClicked} className="product-button" value='HR400/Orion'  >HR400/Orion</button></Link></div>
                <div className="products-inner"><Link to="/product/Orion2" style={{ color: "black" }}><button onClick={onProductClicked} className="product-button" value='Orion2'  >Orion2</button></Link></div>
                <div className="products-inner"><Link to="/product/Pulse" style={{ color: "black" }}><button onClick={onProductClicked} className="product-button" value='Pulse'  >Pulse</button></Link></div>

            </div>

            {/* 
            <div className="products" onClick={onProductClicked}><Link to="/product/HR230">HR230</Link></div>
            <div className="products" onClick={onProductClicked}><Link to="/product/HR300">HR300</Link></div>
            <div className="products" onClick={onProductClicked}><Link to="/product/HR400">HR400/Orion</Link></div>
            <div className="products" onClick={onProductClicked}><Link to="/product/Orion">Orion2</Link></div>
            <div className="products" onClick={onProductClicked}><Link to="/product/Pulse">Pulse</Link></div> */}

            {inProductClicked && <CategoryList />}

        </div>

    )
}

