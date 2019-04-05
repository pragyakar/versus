import React from 'react';
import { Link } from 'react-router-dom';
import NotFound from '../commons/NotFound/NotFound';
import Graph from './Graph';

class Report extends React.Component {

  state = {
    host: "",
    title: "",
    optionA: "",
    optionB: "",
    optionAcount: 0,
    optionBcount: 0
  }

  componentDidMount = () => {
    this.setState({
      host: localStorage.getItem("host"),
      title: localStorage.getItem("title"),
      optionA: localStorage.getItem("optionA"),
      optionB: localStorage.getItem("optionB"),
      optionAcount: parseInt(localStorage.getItem("optionAcount")) - 1,
      optionBcount: parseInt(localStorage.getItem("optionBcount")) - 1
    });
  }
  
  activePollExists = () => {
    const { host, title, optionA, optionB } = this.state;
    if (host === "" || host === null || title === "" || title === null || optionA === "" || optionA === null || optionB === "" || optionB === null) {
      return false;
    } else {
      return true;
    }
  };

  render() {
    const activePoll = this.activePollExists();
    const totalVotes = this.state.optionAcount + this.state.optionBcount;
    return(
      <div className="main-container">
        {activePoll ? 
        <React.Fragment>
          <h2>{this.state.title}</h2>
          <Graph graphStats={this.state} />
          <p> <b>{totalVotes}</b> votes casted</p>
          <p>Poll hosted by: {this.state.host}</p>
          <br />
          <Link to='/ask' className="btn-ask">Start another poll</Link>
        </React.Fragment>
        : <NotFound />
      }
      </div>
    );
  }
}

export default Report;