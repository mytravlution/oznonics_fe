import React from 'react'

export default function listFiles({ dataValues }) {
    return (
        <div>
            {dataValues.map((link)=>(
                   <div>{link}</div>)
                )}
        </div>
    )
}
