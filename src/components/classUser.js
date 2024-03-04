import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 0,
      count2: 2,
    };
    console.log("child constructor");
  }
  componentDidMount = () => {
    console.log("child component did mount");
  };

  render() {
    console.log("child render");
    const { name, location } = this.props;
    const { count1 } = this.state;
    return (
      <div className="user-card text-center rounded-xl w-[600px]  ">
        <h1 className=" m-4 p-4 font-bold text-2xl">count1:{count1}</h1>
        <button className="m-4 p-4 bg-green-100 rounded-lg hover:bg-green-300 font-bold text-2xl"
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
            });
          }}
        >
          clickincreasecount
        </button>
        <h1 className=" m-4 p-4 font-bold text-2xl">Name:{name}</h1>
        <h1 className=" m-4 p-4 font-bold text-2xl">location:{location}</h1>
        <h1 className=" m-4 p-4 font-bold text-2xl">contact</h1>
      </div>
    );
  }
}
export default UserClass;
