import { useContext } from "react";
import Header from "./Header";
import usercontext from "../utils/usercontext";

const About = () => {
  return (
    <div className="about">
      {/* <Header></Header> */}
      <h1 className="">This is the about page</h1>
      <h1>{useContext(usercontext).username}</h1>
    </div>
  );
};

export default About;
