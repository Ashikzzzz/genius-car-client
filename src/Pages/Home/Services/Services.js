import React, { useEffect, useState } from "react";
import ServiceCart from "./ServiceCart";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="text-center ">
        <p className=" font-bold text-orange-600">Services</p>
        <h2 className="font-bold text-5xl">Our Service Area</h2>
        <p className="mb-8">
          the majority have suffered alteration in some form, by injected
          humour,
          <br /> or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 ml-14 my-5">
        {services.map((service) => (
          <ServiceCart key={service._id} service={service}></ServiceCart>
        ))}
      </div>
    </div>
  );
};

export default Services;
