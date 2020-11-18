import React from 'react'

export default function listFiles({ dataValues }) {
    return (
        <div>

<div className="popup">
          <div className="popup-inner">
            <div className="popup-header">
              <p>Search Results for HR300</p>
              <span>&times;</span>
            </div>
             Success
          </div>
        </div>
        
            {dataValues.map((link)=>(
                   <div>{link}</div>)
                )}
        </div>
    )
}
