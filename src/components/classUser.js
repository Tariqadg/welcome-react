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
      <div className="user-card">
        <h1>count1:{count1}</h1>
        <button
          onClick={() => {
            this.setState({
              count1: this.state.count1 + 1,
            });
          }}
        >
          clickincreasecount
        </button>
        <h1>Name:{name}</h1>
        <h1>location:{location}</h1>
        <h1>contact</h1>
      </div>
    );
  }
}
export default UserClass;
