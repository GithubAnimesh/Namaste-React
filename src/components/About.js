import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div>
        <h1>About use page open</h1>
        <UserClass name={"Animesh Singh (Function)"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About use page open</h1>
//       <User name={"Animesh Singh (Function)"} />
//       <UserClass name={"Animesh Singh (Class)"} />
//     </div>
//   );
// };

export default About;
