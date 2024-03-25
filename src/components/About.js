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
      
      <div className="absolute w-3/12 bg-black  p-12 my-20 m-auto right-0 left-0 text-white bg-opacity-70 rounded-lg">
        
        <h1 className=" text-center font-bold text-2xl p-2 ">About Us</h1>
        {/* <User name={"Tariq Ahmad function"} location={"Lucknow"}/> */}
        <p></p>
        <UserClass  name={"Tariq Ahmad class"} location={"Lucknow"} />
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
