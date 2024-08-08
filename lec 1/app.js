const heading = React.createElement("h1", { id: "heading" }, "Hello React!");
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "abcd" }, "Hello for H1"),
    React.createElement("h2", { id: "abcde" }, "Hello for H2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "abcd" }, "Hello for H1"),
    React.createElement("h2", { id: "abcde" }, "Hello for H2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("abc"));
// root.render(heading);
root.render(parent);
