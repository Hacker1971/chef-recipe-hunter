import React from "react";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const Chefdata = ({ data }) => {
  return (
    <div className="card card-side w-1/2 md:w-2/3 bg-base-100 shadow-2xl my-7 p-8 ms-6 md:mx-auto">
      <figure>
        <LazyLoad height={384} width={384} threshold={0.95}>
          <img className=" md:w-96 md:h-96" src={data?.image} alt="Movie" />
        </LazyLoad>
      </figure>
      <div className="card-body">
        <h2 className="card-title">Chef Name : {data?.name}</h2>
        <p>Years of experience : {data?.experenced} Year</p>
        <p>Numbers of recipes : {data?.recipes} </p>
        <p>Likes : {data?.likes} k</p>
        <div className="card-actions justify-center">
          <button className="btn btn-primary text-white ">
            <Link className="font-bold" to={`/single/${data.id}`}>View Recipes</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chefdata;
