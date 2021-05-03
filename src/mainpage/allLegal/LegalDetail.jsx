import React, { useState } from 'react'
import '../allProducts/allProducts.scss'
import { Redirect } from 'react-router-dom';

export default function LegalDetail({ detailselected, productselected }) {
    // let { id } = useParams();
    // console.log({ id });
    const arr1 = [];
    var sub_category = localStorage.getItem("sub_category")
    if (detailselected === "validity") {
        arr1.push('Valid Contract', 'Uneforceable Contract', 'illegal Contract');
    }
    else if (detailselected === "formation") {
        arr1.push('Express Contract', 'Implied Contract');
    }
    else if (detailselected === "statistic") {
        arr1.push('Inilateral Contract', 'Bilateral Contract', 'Executed Contract');
    }
  
    const [inDetailClicked, setInDetailClicked] = useState(false);
    const [subCategorySelected, setDetail] = useState('');
    const [buttonValue, setButtonValue] = useState('');
    const [isPeripheral, setIsPeripheral] = useState(false);
    const ext = productselected + "_" + detailselected;

    const onDetailClicked = (event) => {
        setInDetailClicked(true);
        setDetail(event.target.value);
        setButtonValue(event.target.getAttribute("data-index"));
        setIsPeripheral(true);
        
        console.log("details:" + subCategorySelected + ": " + isPeripheral);
    }

    return (
        <div>
            <div className={inDetailClicked?"category-outer button-selected":"category-outer"}>
                {/* <p>{detailselected}</p> */}
                {arr1.map((cat, index) => {
                    if (sub_category === "All") {
                        return (
                            <button data-index={index}  key={index}  
                            className={buttonValue.toString() === index.toString() ? 'category-inner-clicked' : 'category-inner'} 
                            value={cat.toLowerCase()} onClick={onDetailClicked}>{cat}</button>
                        )
                    }
                    else if (sub_category.toLowerCase() === cat.toLowerCase()) {

                        return (
                           
                            <button data-index={index} key={index}  
                                className={buttonValue.toString() === index.toString() ? 'category-inner-clicked' : 'category-inner'}
                                value={cat.toLowerCase()}
                                onClick={onDetailClicked} >
                                {cat}</button>
                             
                        )
                    }
                    else {
                        return (
                            <div key ={index}></div>
                        )
                    }
                })}
            </div>
            <div style={{ height: "20px" }}></div>
            <div >
                {isPeripheral && <Redirect to={`/addImage/${"legal_"+ext + "_" + subCategorySelected}`} /> }
            </div>

        </div>
    )
}
