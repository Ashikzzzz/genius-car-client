import React from "react";

const CarousleItem = ({ banner }) => {
  const { image, id, prev, next } = banner;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousle-img">
        <img src={image} alt="" className="w-full rounded-lg " />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-36 top-1/3">
        <h1 className="text-5xl font-bold text-white">
          Affordable
          <br />
          Price for car <br />
          Servicing
        </h1>
      </div>
      <div className="absolute flex justify-between transform w-1/2 -translate-y-1/2 left-36  top-1/2">
        <p className="text-white text-xl">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </p>
      </div>
      <div className="absolute flex justify-start transform w-1/2 -translate-y-1/2 left-36   top-3/4">
        <button className="btn btn-outline btn-info mr-5">Discover More</button>
        <button className="btn btn-outline btn-success">Latest Project</button>
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <a href={`#slide${prev}`} className="btn btn-circle">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default CarousleItem;
