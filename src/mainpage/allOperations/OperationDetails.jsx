import React, { useState } from 'react'
import '../allProducts/allProducts.scss'
import { Redirect } from 'react-router-dom';

export default function OperationDetail({ detailselected, productselected }) {
    // let { id } = useParams();
    // console.log({ id });
    const arr1 = [];
    var sub_category = localStorage.getItem("sub_category")
    if (detailselected === "prevention") {
        arr1.push('Process capability', 'Education');
    }
    else if (detailselected === "appraisal costs") {
        arr1.push('Incoming Inspections', 'Auditing', 'Caliberation');
    }
    else if (detailselected === "internal failure") {
        arr1.push('Process delay', 'Rework', 'Downtime', 'Retest');
    }
    else if (detailselected === "external failure") {
        arr1.push('Warranty', 'Loss of Customers', 'Repairs');
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
                {isPeripheral && <Redirect to={`/addImage/${"operations_"+ext + "_" + subCategorySelected}`} /> }
            </div>

        </div>
    )
}
