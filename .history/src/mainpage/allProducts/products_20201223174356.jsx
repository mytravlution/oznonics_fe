import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import Header from "../../shared/header/header";
import CategoryList from "./productDetail";
import MidHeader from "../../shared/midHeader/midHeader";

export default function Products() {
    // var user_type = localStorage.getItem('user-type');
    const [inProductClicked, setInProductClicked] = useState(false);
    var segment = localStorage.getItem('segment');
    const arr1 = ["HR230", "HR300", "HR400/Orion", "Orion2", "Pulse"];

    const onProductClicked = (event) => {
        setInProductClicked(true);
        console.log("Product:" + inProductClicked);
    }

    return (
        <div className="bg-color">
            <Header />
            <div className="products-outer">
                <MidHeader />
                {/* {user_type === "admin" ?  <MidHeader/> : null} */}
                {screen.width < 800 ? <p>screen size</p> : <p></p>}
                <h2><span>Products</span></h2>
                <div className="products-parent">
                    {arr1.map((cat, index) => {
                        if (segment === "All") {
                            return (
                                <div className="products-inner">
                                    <Link to={`/product/${cat}`} style={{ color: "black" }}>
                                        <button onClick={onProductClicked} className="product-button">{cat}
                                        </button>
                                    </Link></div>
                            )
                        }
                        else if (segment.toLowerCase() === cat.toLowerCase()) {
                            return (
                                <div className="products-inner">
                                    <Link to={`/product/${cat}`} style={{ color: "black" }}>
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
                    {/* <div className="products-inner"><Link to="/product/HR230" style={{ color: "black" }}><button onClick={onProductClicked} className="product-button">HR230</button></Link></div>
                    <div className="products-inner"><Link to="/product/HR300" style={{ color: "black" }}><button onClick={onProductClicked} className="product-button">HR300</button></Link></div>
                    <div className="products-inner"><Link to="/product/HR400" style={{ color: "black" }}><button onClick={onProductClicked} className="product-button">HR400/Orion</button></Link></div>
                    <div className="products-inner"><Link to="/product/Orion2" style={{ color: "black" }}><button onClick={onProductClicked} className="product-button">Orion2</button></Link></div>
                    <div className="products-inner"><Link to="/product/Pulse" style={{ color: "black" }}><button onClick={onProductClicked} className="product-button">Pulse</button></Link></div> */}
                </div>
            </div>


            {inProductClicked && <CategoryList />}

        </div>

    )
}


