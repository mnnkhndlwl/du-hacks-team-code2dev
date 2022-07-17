import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { urlFor, client } from "../../client";
import "./home.scss";
import { Link } from "react-router-dom";
const Home = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "home"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);

  return (
    <>
      <div className="bg-gray-900 min-h-screen">
        <h2 className="head-text">
          Welcome <br /> <span className="">Select your field</span>{" "}
        </h2>
        <div className="app__profiles">
          {abouts.map((data, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: "tween" }}
               className="app__profile-item"
              key= {abouts.title + index}
            >
            <Link to={`/${data.field}`} >
              <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                
                <img src={urlFor(data.imgUrl)} alt={data.title} className="w-50 h-50"/>
                
                <div class="p-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-transform: uppercase">
                      {data.field}
                    </h5>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {data.description}
                  </p>
                </div>
              </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;

