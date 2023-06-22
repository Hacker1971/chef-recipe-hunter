import React, { useRef } from "react";
import { useLoaderData } from "react-router-dom";
import FoodCart from "./FoodCart";
import ReactToPrint from 'react-to-print';

const SingleData = () => {
  const ref = useRef()
  const food = useLoaderData([]);
  console.log(food);
  return (
    <div ref={ref}>
      <div ref={ref} className="text-center text-3xl my-6 font-bold">
        <h1>Chef Name : {food.name} </h1>
        <h1>Number Of Recipes : {food.foods.length}</h1>
      </div>
      <div>
        <div className="text-center grid md:grid-cols-3 gap-4 md:ms-7">
          {food?.foods?.map((fd) => (
           <FoodCart key={fd.id} foods= {fd}></FoodCart>
          ))}
        </div>
        <div className="text-center">
          <ReactToPrint trigger={() =><button className="btn btn-outline btn-warning mt-9">print</button> } content={()=>ref.current}/>
        </div>
      </div>
    </div>
  );
};

export default SingleData;
