import React from 'react'
import './allProducts.scss';
import { useParams } from 'react-router-dom';

export default function ProductDetail({ detailselected }) {
    let { id } = useParams();
    console.log({ id });
    const arr1=[];
    if(detailselected==="mechanical"){
        arr1.push('Product Drawing', 'Packaging', 'Product Assembly', 'Inline Changes');
    }
    return (


        <div>
            <h3>{detailselected}</h3>

            arr
            {detailselected === "mechanical" &&
                arr1.map(cat => {
                    return (
                        <div className="category-inner">{cat}</div>
                    )
                })
            }
        </div>
    )
}
