import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black mt-52 p-9">
        <div className='py-6 text-7xl text-center text-gray-400'>
        RECIPE HUNTER
      </div>
      <div className="grid md:grid-cols-3 justify-center text-center text-white p-8 gap-6">
        <div>
          <h1 className="text-4xl font-bold">Address</h1>
          <h2 className="text-2xl font-semibold my-3">
            570 8th Ave,New York, NY 10018 <br />
            United States
          </h2>
          <h3 className="text-yellow-900 hover:text-white text-xl"><a href="">View Google Map</a></h3>
        </div>
        <div>
          <h1 className="text-4xl font-bold">Book A Table</h1>
          <h2 className="text-2xl font-semibold my-3">
            Dogfood och Sliders foodtruck.
            <br /> Under Om oss kan ni läsa
          </h2>
          <h3  className="text-yellow-900 hover:text-white text-xl"> Make A Call</h3>
        </div>
        <div>
          <h1 className="text-4xl font-bold">Opening Hours</h1>
          <h2 className="text-2xl font-semibold my-3">
            Monday-Friday: 8am - 4pm
            <br />
            Saturday: 9am - 5pm
          </h2>
          <h3  className="text-yellow-900 hover:text-white text-xl"> Make A Call</h3>
        </div>
      </div>
      <div className='py-6 text-sm text-center text-gray-400'>
        © 2023 Recipe Hunter Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
