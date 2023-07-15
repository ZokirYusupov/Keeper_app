import {React} from 'react';

export const Card = (props) => {
  return(
        <div className="card">
        <div className="top">
          <h2>{props.name}</h2>
          <img src={props.imgUrl} alt="" />
        </div>
        <div className="bottom">
          <p>{props.liked}</p>
          <p>{props.produced}</p>
        </div>
      </div>
  )

  
}