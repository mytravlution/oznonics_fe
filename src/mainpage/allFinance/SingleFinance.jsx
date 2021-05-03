import React, {  useState } from 'react'
import Header from '../../shared/header/header';
import MidHeader from '../../shared/midHeader/midHeader';
import { useParams } from 'react-router-dom';
import '../allProducts/allProducts.scss'
import FinanceDetail from './FinanceDetail';
// import ProductDetail from './productDetail';

export default function SingleFinance() {

    let { id } = useParams();
    // var user_type = localStorage.getItem('user-type');

    const [inProductClicked, setInProductClicked] = useState(false);
    const [selectedDetail, setDetail] = useState("");
    const [buttonValue, setButtonValue] = useState('');
    var category = localStorage.getItem('category');
    const arr1 = ['Income', 'Spending', 'Saving'];
    
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
            <MidHeader />
                <h2><span><a href="/finance/">{id}</a></span></h2>
                <div className={inProductClicked ? "detail-inner button-selected":"detail-inner"}>
                    {arr1.map((cat, index) => {
                      if(category === "All"){
                        return (
                            <div key={index}>
                                <button data-index={index} 
                                className={ buttonValue.toString() === index.toString() ? 'detail-button-selected':'detail-button'} 
                                value={cat.toLowerCase()}  
                                onClick={onProductClicked}>{cat}</button>
                            </div>
                        )   
                      }
                      else if(category.toLowerCase() === cat.toLowerCase()){
                        return (
                            <div key={index}>
                                <button data-index={index} 
                                className={ buttonValue.toString() === index.toString() ? 'detail-button-selected':'detail-button'} 
                                value={cat.toLowerCase()}  
                                onClick={onProductClicked}>{cat}</button>
                            </div>
                        )
                    }else{
                        return (
                       <div key ={index}> </div>
                        )
                    }
                    })}
                </div>
                <div  >
                    {inProductClicked && <FinanceDetail detailselected={selectedDetail} productselected = {id} />}
                </div>
            </div>
        </div>
    )
}

