import UserClass from "./classUser";
import User from "./User";
import UserClass from "./classUser";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parentcontructor");
  }

  componentDidMount() {
    console.log("parentcomponentdidmount");
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About Us</h1>
        {/* <User name={"Tariq Ahmad function"} location={"Lucknow"}/> */}
        <UserClass name={"Tariq Ahmad class"} location={"Lucknow"} />
      </div>
    );
  }
}
// const About=()=>{
//     return(
//         <div>
//             <h1>About Us</h1>
//             {/* <User name={"Tariq Ahmad function"} location={"Lucknow"}/> */}
//             <UserClass name={"Tariq Ahmad class"} location={"Lucknow"}/>
//         </div>
//     )
// }
export default About;
