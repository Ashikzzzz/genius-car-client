import React from "react";

const ServiceCart = ({ service }) => {
  const { img, title, price } = service;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-2xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="text-orange-500 font-bold">price: {price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-info">see more</button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ServiceCart;
