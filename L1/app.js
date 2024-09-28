// const rootel = React.createElement(
//   "h1",
//   { id: "heading", creator: "Harsh jha" },
//   "hello from react"
// );

/*
    div "paernt"
        div "child1"
            h1 "(hello form h1 element)"
            h2 "(hello form h2 element)"
        div
        div "child2"
            h1 "(hello form h1 element)"
            h2 "(hello form h2 element)"
        div
    div
*/
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
