import React from 'react';

const Card = (props) => {
    const{name,img,country,rating,designation,salary}=props.card||{}
    // console.log(props.card)
    return (
        <div className="col-md-4">
            <div className="card mb-3 h-100 bg-secondary" >
  <div className="row  ">
    <div className="col-md-5">
      <img src={img} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-7">
      <div className="card-body">
        <h5 className="card-title">Name: {name}</h5>
        <p className="card-text">Role: {designation}</p>
        <p className="card-text">{country} </p>
        <p className="card-text">Rating: {rating} </p>
        <p className="card-text">Salary: ${salary}</p>
        <button type="button" 
        onClick={()=>props.handleAddIteam(props.card)}
        className="btn btn-primary"> <i className="fas fa-shopping-cart"></i> Click To Add</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Card;