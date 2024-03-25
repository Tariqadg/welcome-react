import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
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
    const { count } = this.state;
    return (
      <div className=" p-1 ">
        <h1 className="text-left font-semibold p-1">count :{count}</h1>
        <button className="text-left bg-green-600 rounded-lg hover:bg-green-400 font-semibold text-1xl p-1"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          clickincreasecount
        </button>
        <h1 className=" text-left font-semibold ">Name:{name}</h1>
        <h1 className=" text-left font-semibold ">location:{location}</h1>
        <h1 className=" text-left font-semibold ">contact</h1>
      </div>
    );
  }
}
export default UserClass;
