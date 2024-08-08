import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="about-container">
        <h1>About</h1>
        {/* <User name={"Priyanshu Dubey (functional component)"} /> */}
        <UserClass name={"Priyanshu Dubey (class based component)"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div className="about-container">
//       <h1>About</h1>
//       <User name={"Priyanshu Dubey (functional component)"} />
//       <UserClass name={"Priyanshu Dubey (class based component)"} />
//     </div>
//   );
// };

export default About;
