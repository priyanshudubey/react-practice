//class based component
import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {},
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/priyanshudubey");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("component updated");
  }
  render() {
    const { name, location, avatar_url, blog, bio } = this.state.userInfo;
    return (
      <div className="user">
        <img
          className="rounded-full overflow-hidden w-56 h-56"
          src={avatar_url}></img>
        <h3> {bio}</h3>
        <h3>Name: {name}</h3>
        <h3>Address: {location}</h3>
        <h3>Age: 24</h3>
        <h3>contact: priyanshu0dubey@gmail.com</h3>
        <h3>Website: {blog}</h3>
      </div>
    );
  }
}

export default UserClass;
