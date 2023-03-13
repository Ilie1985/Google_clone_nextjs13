import React, { Fragment } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

const HomeSearch = () => {
  return (
    <Fragment>
      <form className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200  px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-2xl">
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input type="text" className="flex-grow focus:outline-none"/>
        <BsFillMicFill className="text-lg"/>
      </form>
    </Fragment>
  );
};

export default HomeSearch;
