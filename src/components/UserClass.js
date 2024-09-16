// clased based function
import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      userInfo: {
        name: "Animesh Git",
        location: "default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/GithubAnimesh");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate() {
    console.log("After render re call this will call to update component");
  }

  render() {
    const { name, location, login, avatar_url } = this.state.userInfo;
    const { count } = this.state;
    return (
      <div>
        <img src={avatar_url} />
        <h1>Name: {name}</h1>
        <h1>userName: {login}</h1>
        <h2>Location: {location}</h2>
        <h2>Job Titale: Software Developer</h2>
        <h2>Count: {count}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increment
        </button>
      </div>
    );
  }
}

export default UserClass;
