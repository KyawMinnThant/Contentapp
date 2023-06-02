import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <div className=" flex flex-col items-center justify-center gap-5 mt-[150px]">
        <p className=" text-blue-700 text-4xl font-bold text-center">
          Welcome Back !
        </p>
        <p className="md:w-[300px] w-full lg:w-[550px] text-center text-gray-700 ">
          Your account has been found by server.Let's make contacts and contacts
          with each other.Deliver your meaasges
        </p>
        <Link to={`/`}>
          <button className=" text-white p-2 w-[350px] font-bold  bg-blue-700 rounded-md shadow-md mt-3 transition hover:bg-blue-900">
            Go To See Contacts
          </button>
        </Link>
      </div>
    </>
  );
};

export default Welcome;
