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
      <div className="mx-[600px] my-[30px] bg-gray-100 w-[600px] h-[400px] font-medium border border-solid border-zinc-500">
        <h1 className=" text-center font-extrabold text-4xl">About Us</h1>
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
