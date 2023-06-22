import React from "react";
import Lottie from "lottie-react";
import background_img from "../assets/bg/bg.jpg";
import manu from "../assets/manu.json";
import { useLoaderData, useNavigation } from "react-router-dom";
import Chefdata from "./Chefdata";
import Loder from "./Loder";

const Home = () => {
  const navigation = useNavigation();
  console.log(navigation.state);
  if (navigation.state === "loading") {
    return <Loder />;
  }
  const data = useLoaderData([]);

  return (
    <div>
      <div
        className="min-h-screen  relative bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: `url(${background_img})` }}
      >
        <div>
          <h1
            className="text-8xl text-center text-white font-bold"
            style={{ fontFamily: ["Bebas Neue", "cursive"] }}
          >
            Popular Dishes
          </h1>
          <br></br>
          <h2 className="text-2xl text-center text-white font-bold">
            OUR MOST POPULAR CHEF
          </h2>
        </div>
      </div>

      <div className="relative lg:w-full md:flex justify-items-center items-center   gap-4 mx-auto ">
        <div className="w-full lg:w-1/2 lg:ml-auto h-56  sm:h-96">
          <Lottie animationData={manu} loop={true} />
        </div>
        <div className="w-full lg:w-1/2 lg:ml-auto h-56   sm:h-96 ">
          <h1 className="pt-44 text-3xl font-semibold text-black mx-auto ">
            WE ARE SPECIALIZED IN <br></br>SPICY MODERN FUSION FOOD
          </h1>
          <br />
          <h2 className="text-2xl">THE ART OF COOKING</h2>
        </div>
      </div>
      <h1 className="text-center mt-28 text-4xl font-bold ">Japanese Chef </h1>
      <div className="mt-24 grid grid-rows-2">
        {data.map((pd) => (
          <Chefdata key={pd?.id} data={pd}></Chefdata>
        ))}
      </div>
    </div>
  );
};

export default Home;
