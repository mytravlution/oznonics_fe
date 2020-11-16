import React from 'react'
import './allProducts.scss';
import { useParams } from 'react-router-dom';

export default function ProductDetail({ detailselected }) {
    let { id } = useParams();
    console.log({ id });
    const arr1=[];
    if(detailselected==="mechanical"){
        arr1.push
    }
    const category1 = ['Product Drawing', 'Packaging', 'Product Assembly', 'Inline Changes', 'Costing', 'BOM'];
    return (


        <div>
            <h3>{detailselected}</h3>

            {detailselected === "mechanical" &&
                category1.map(cat => {
                    return (
                        <div className="category-inner">{cat}</div>
                    )
                })
            }
        </div>
    )
}
