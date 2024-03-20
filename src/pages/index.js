import React from "react";
import style from "../styles/index.module.css";
import Input from "@/components/input";
import HomePage from "@/components/main";

const title = "Virtual BookStore";

const Home = () => {
  return( 
    <div>
        <title>{title}</title>
        <HomePage />
    </div>
  );
};

export default Home;
