import React, { useState } from 'react'
import './allProducts.scss';
import SubCategory from './subCategory';
export default function ProductDetail({ detailselected, productselected }) {
    // let { id } = useParams();
    // console.log({ id });
    const arr1 = [];
    var sub_category = localStorage.getItem("sub_category")
    if (detailselected === "mechanical") {
        arr1.push('Product Drawings', 'Packaging', 'Product Assembly', 'Inline Changes', 'Costing', 'BOM');
    }
    else if (detailselected === "electronics") {
        arr1.push('Gerber files', 'Schematics', 'Firmware Source Code & HEX Files', 'Inline Changes', 'Costing', 'BOM');
    }
    else if (detailselected === "electrical") {
        arr1.push('In-house Designs', 'Externally sourced', 'New Component Dev', 'Inline Changes', 'Costing', 'BOM');
    }
    else if (detailselected === "testing") {
        arr1.push('Testing Protocols', 'Testing Setup', 'Testing Equipment', 'Testing  Process Changes', 'Test Results', 'Field Input');
    }
    else if (detailselected === "product accessories and peripherals") {
        arr1.push('Battery Pack', 'Battery Charger', 'Bags & Packs', 'Mounting Accessories', 'Apparel', 'Miscellaneous');
    }
    const [inDetailClicked, setInDetailClicked] = useState(false);
    const [subCategorySelected, setDetail] = useState('');
    const [buttonValue, setButtonValue] = useState('');
    const [isPeripheral, setIsPeripheral] = useState(false);

    const onDetailClicked = (event) => {
        setInDetailClicked(true);
        setDetail(event.target.value);
        setButtonValue(event.target.getAttribute("data-index"));
        if()
        console.log("details:" + subCategorySelected);
    }

    return (
        <div>
            <div >
                {/* <p>{detailselected}</p> */}
                {arr1.map((cat, index) => {
                     if(sub_category === "All"){
                    return (
                        <button data-index={index} className={ buttonValue.toString() === index.toString() ? 'category-inner-clicked':'category-inner'} value={cat.toLowerCase()}  onClick={onDetailClicked}>{cat}</button>
                        )
                    }
                    else if(sub_category.toLowerCase() === cat.toLowerCase()){
                   
                        return (
                            <button  data-index={index} 
                            className={ buttonValue.toString() === index.toString() ? 'category-inner-clicked':'category-inner'} 
                            value={cat.toLowerCase()}  
                            onClick={onDetailClicked} >
                                {cat}</button>
                            )
                    }
                    else{
                        return (
                                <div></div>
                                )   
                    }
                })}
            </div>
            <div style={{height:"20px"}}></div>
            <div >
                {inDetailClicked && 
                <SubCategory subCategorySelected={subCategorySelected} detailSelected={detailselected} productselected = {productselected}/>}
            </div>

        </div>
    )
}
