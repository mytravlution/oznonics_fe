import React, {  useState } from 'react'
import Header from '../../shared/header/header';
import MidHeader from '../../shared/midHeader/midHeader';
import { useParams} from 'react-router-dom';
import './allProducts.scss';
import ProductDetail from './productDetail';
export default function Products() {

    let { id } = useParams();

    const [inProductClicked, setInProductClicked] = useState(false);
    const [selectedDetail, setDetail] = useState("");
    const [buttonValue, setButtonValue] = useState('');
    var category = localStorage.getItem()
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
            <MidHeader />
                <h2><span>{id}</span></h2>

                <div className="detail-inner">
                    {arr1.map((cat, index) => {
                        return (
                            <div>
                                <button data-index={index} 
                                className={ buttonValue.toString() === index.toString() ? 'detail-button-selected':'detail-button'} 
                                value={cat.toLowerCase()}  
                                onClick={onProductClicked}>{cat}</button>
                            </div>
                        )
                    })}
                </div>
                <div className="category-outer" >
                    {inProductClicked && <ProductDetail detailselected={selectedDetail} productselected = {id} />}
                </div>
            </div>
        </div>
    )
}

