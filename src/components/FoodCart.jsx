import React from "react";
import { useNavigation } from "react-router-dom";
import Loder from "./Loder";
import { toast } from "react-hot-toast";
import LazyLoad from "react-lazy-load";

const FoodCart = ({ foods }) => {
  const navigation = useNavigation();
  console.log(navigation.state);
  if (navigation.state === "loading") {
    return <Loder />;
  }

  const handelToster = () => {
    console.log("object");
    return toast.success("ADD CHEF ODER! 👍");
  };
  return (
    <div className="card w-80 bg-base-100 shadow-xl">
      <figure>
        <LazyLoad height={256} width={256} threshold={0.95}>
          <img
            className="sm:w-64 md:w-full rounded"
            src={foods?.foodImage}
            alt="Shoes"
          />
        </LazyLoad>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{foods?.foodName}</h2>
        <h3 className="text-left">Rating : {foods?.rating}</h3>
        <p>{foods?.foodInfo}</p>

        <div className="card-actions justify-end">
          <button onClick={handelToster} className="btn btn-primary">
            Favorite
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
