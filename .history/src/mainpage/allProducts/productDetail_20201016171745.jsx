import React from 'react'
import './allProducts.scss';
import { useParams } from 'react-router-dom';

export default function ProductDetail({ detailselected }) {
    let { id } = useParams();
    console.log({ id });


    const category1 = ['Product Drawing', 'Packaging', 'Product Assembly', 'Inline Changes', 'Costing', 'BOM'];
    return (


        <div>
            {if(true){<h3>ytrue</h3>}}
            <h3>{detailselected}</h3>
            {category1.map(cat => {
                return (
                    <div className="category-inner">{cat}</div>
                )
            })}

        </div>
    )
}
