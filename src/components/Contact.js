import { useContext } from "react";
import Header from "./Header";
import usercontext from "../utils/usercontext";

const Contact = () => {
  return (
    <div className="contact">
      {/* <Header></Header> */}
      <h1>This is the Contact page</h1>
      <h1>{useContext(usercontext).username}</h1>
    </div>
  );
};

export default Contact;
