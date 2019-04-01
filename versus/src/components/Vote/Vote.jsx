import React from "react";
import NotFound from "../commons/NotFound/NotFound";

class Vote extends React.Component {
  state = {
    host: "",
    title: "",
    optionA: "",
    optionB: "",
    optionAcount: 0,
    optionBcount: 0,
    optionApercent: 50,
    optionBpercent: 50
  };

  componentDidMount() {
    this.setState({
      host: localStorage.getItem("host"),
      title: localStorage.getItem("title"),
      optionA: localStorage.getItem("optionA"),
      optionB: localStorage.getItem("optionB"),
      optionAcount: parseInt(localStorage.getItem("optionAcount")) + 1,
      optionBcount: parseInt(localStorage.getItem("optionBcount")) + 1
    });
  }

  activePollExists = () => {
    const { host, title, optionA, optionB } = this.state;
    if (host === "" || title === "" || optionA === "" || optionB === "") {
      return false;
    } else {
      return true;
    }
  };

  addVoteLeft = () => {
    this.setState({
      optionAcount: parseInt(this.state.optionAcount) + 1
    }, () => this.updateVotes());
    console.log('clicked left');
  };

  addVoteRight = () => {
    this.setState({
      optionBcount: parseInt(this.state.optionBcount) + 1
    }, () => this.updateVotes());
    console.log('clicked right');
  };

  updateVotes = () => {
    var totalVotes = parseInt(this.state.optionAcount) + parseInt(this.state.optionBcount);
    var percentA = (parseInt(this.state.optionAcount) / totalVotes) * 100;
    var percentB = (parseInt(this.state.optionBcount) / totalVotes) * 100;
    this.setState({
      optionApercent: Math.round(percentA),
      optionBpercent: Math.round(percentB)
    });
    console.log(this.state.optionApercent, this.state.optionBpercent);
  };

  render() {
    var gridSizes = {
      display: "grid",
      gridTemplateColumns:
        this.state.optionApercent + "%" + this.state.optionBpercent + "%"
    };
    const {
      host,
      title,
      optionA,
      optionApercent,
      optionB,
      optionBpercent
    } = this.state;
    const activePoll = this.activePollExists();
    return (
      <div className="main-container-lg">
        {activePoll ? (
          <div className="vote-container">
            <h1 className="poll-title">{title}</h1>
            <p className="poll-info">(Click on desired side to vote)</p>
            <div className="voting-box" style={gridSizes}>
              <div
                className="optionA"
                name="optionA"
                onClick={this.addVoteLeft}
              >
                <span className="option-size">{optionApercent}%</span>
                <br />
                <span className="option-title">{optionA}</span>
              </div>
              <div
                className="optionB"
                name="optionB"
                onClick={this.addVoteRight}
              >
                <span className="option-size" id="size-two">
                  {optionBpercent}%
                </span>
                <br />
                <span className="option-title">{optionB}</span>
              </div>
            </div>
            <span className="host-name">Hosted by: {host}</span>
          </div>
        ) : (
          <NotFound />
        )}
      </div>
    );
  }
}

export default Vote;
