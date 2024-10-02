import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "hello form h1 element"),
    React.createElement("h2", {}, "hello form h2 element"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "hello form h1 element"),
    React.createElement("h2", {}, "hello form h2 element"),
  ]),
]);

//react fucntional componment

const Headerfn = () => {
  return (
    <h1 id="head" className="Headfn">
      hello i am a header form fucntional componment
    </h1>
  );
};

// react element
const header = (
  <h1 id="header" className="headclass">
    Hello ji i am a header
  </h1>
);

// console.log(parent);
// console.log(<Headerfn />);
// console.log(header);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Headerfn />);
