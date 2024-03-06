import React from "react";
import style from "../styles/index.module.css";
import Input from "@/components/input";

const Home = () => {
  return( 
    <div className={style.home}>
        <div className={style.inputContainer}><Input /></div>
    </div>
  );
};

export default Home;
