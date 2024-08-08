import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { id: "heading" }, "Hello React!");

//React element
const JsxHeading = () => (
  <h1
    className="head"
    tabIndex="5">
    Hello React...!
  </h1>
);

//Functional component
const HeadingComponent = () => (
  <div>
    <JsxHeading />
    <h1>{2 + 2}</h1>
    <h1>Hello React from functional components</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("abc"));

root.render(<HeadingComponent />);
