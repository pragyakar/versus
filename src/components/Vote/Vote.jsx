import React from "react";
import { withRouter} from 'react-router-dom';
import NotFound from "../commons/NotFound/NotFound";
import Stats from "../Stats/Stats";

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
    }, () => this.updateVotes());
    console.log(this.state);
  }

  activePollExists = () => {
    const { host, title, optionA, optionB } = this.state;
    if (host === "" || host === null || title === "" || title === null || optionA === "" || optionA === null || optionB === "" || optionB === null) {
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
    localStorage.setItem("optionAcount", this.state.optionAcount);
    localStorage.setItem("optionBcount", this.state.optionBcount);
    console.log(this.state.optionApercent, this.state.optionBpercent);
  };
  
  viewReport = () => {
    this.props.history.push('/report');
  }

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
    console.log(activePoll);
    console.log(this.state);
    return (
      <div className="main-container-lg">
        {activePoll ? (
          <React.Fragment>
            <div className="vote-container">
              <h1 className="poll-title">{title}</h1>
              <p className="poll-info">(Click on desired side to vote)</p>
              <div className="voting-box" style={gridSizes}>
                <div className="optionA" onClick={this.addVoteLeft}>
                  <span className="option-size">{optionApercent}%</span>
                  <span className="option-title">{optionA}</span>
                </div>
                <div className="optionB" onClick={this.addVoteRight}>
                  <span className="option-size">{optionBpercent}%</span>
                  <span className="option-title">{optionB}</span>
                </div>
              </div>
              <span className="host-name">Hosted by: {host}</span>
            </div>
            <Stats data={this.state}/>
            <button className="btn-end" onClick={this.viewReport}>End Poll</button>
          </React.Fragment>
        ) : (
          <NotFound />
        )}
      </div>
    );
  }
}

export default withRouter(Vote);
