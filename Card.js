import React from 'react'
import './Card.css';
function Card({ tittle, imageUrl, body }) {
  return (
    <div className="card-container">

      <div className="image-container">
        <img src={imageUrl} alt='' />
        </div>
        <div className="content">

        <div className="card-tittle">
          <h3>{tittle}</h3>
        </div>

        <div className="card-body">
          <p>{body}</p>
        </div>

        <div className="btn">
          <button>
            <a> View More</a>
          </button>
        </div>

        </div>
        
     
    </div>


  )
}

export default Card
