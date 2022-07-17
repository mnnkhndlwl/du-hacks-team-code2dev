import React from "react";
import { Link } from "react-router-dom";
import path from "./path.png";
import side from "./side.svg";
import sc from "./sc.mp4";
const Hero = () => {
  const navigation = [
    { title: "Customers", path: "javascript:void(0)" },
    { title: "Careers", path: "javascript:void(0)" },
  ];

  return (
    <div className="bg-gradient-to-tl from-gray-700 via-gray-900 to-black min-h-screen">
      <header>
        <nav className="items-center pt-5 px-4 mx-auto max-w-screen-xl flex-row sm:px-8 sm:flex sm:space-x-6">
          <Link to="/">
            <img src={path} width={120} height={50} alt="Float UI logo" />
          </Link>
          <ul className="py-4 flex-1 items-center flex space-x-3 sm:space-x-6 sm:justify-end">
            {navigation.map((item, idx) => (
              <li className="text-gray-200" key={idx}>
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
            <li>
              <a
                href="javascript:void(0)"
                className="flex items-center text-gray-200"
              >
                Log In
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <section className="mt-24 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
          <h1 className="text-white font-bold text-4xl xl:text-5xl">
            your one stop solution for all your
            <span className="text-indigo-400"> Self Study needs</span>
          </h1>
          <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
            Nowadays, most students are trying to educate themselves through a
            website, app, youtube channel, book, blog, podcast, and even
            instagram page but in the beginning, it is very difficult to find
            out online study resources from various platforms and it really
            takes too much time of a student.
            <br />
            Study Path helps you to find out online study resources from various
            platforms in numerous fields such as jee,neet,engineering subjects,
            learning languages, and more. Therefore, students will not waste
            their golden time to search study resources on google or any other
            way.
          </p>
          <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
            <Link to="/home">
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Get Started
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
          <img src={side} className="mx-auto sm:w-10/12" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
