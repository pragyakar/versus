import React from 'react';
import { withRouter } from 'react-router-dom';

class PollForm extends React.Component {

  state = {
    host: '',
    title: '',
    optionA: '',
    optionB: '',
    error: ''
  }

  componentDidMount() {
    localStorage.clear();
  }

  startPoll = () => {
    const { host, title, optionA, optionB} = this.state;
    if ( host === '' || title === '' || optionA === '' || optionB === '') {
      this.setState ({
        error: 'Please fill out all the fields'
      });
    } else {
      localStorage.setItem("host", host);
      localStorage.setItem("title", title);
      localStorage.setItem("optionA", optionA);
      localStorage.setItem("optionAcount", 0);
      localStorage.setItem("optionB", optionB);
      localStorage.setItem("optionBcount", 0);
      this.props.history.push('/vote');
    }
  }

  updateFormState = (e) => {
    this.clearErrorMessage();
    this.setState ({
      [e.target.name]: e.target.value
    })
  }

  clearErrorMessage = () => {
    this.setState ({
      error: ''
    })
  }

  render() {
    return(
      <form>
        <input type="text" name="host" id="host" className="form-input" placeholder="Host Name" onChange={e => this.updateFormState(e)} />
        <hr />
        <input type="text" name="title" id="survey-title" className="form-input" placeholder="Poll Title" onChange={e => this.updateFormState(e)} />
        <br /><br />
        <input type="text" name="optionA" id="optionA" className="form-input" placeholder="Option A" maxLength="15" onChange={e => this.updateFormState(e)} />
        <br /><br />
        <input type="text" name="optionB" id="optionB" className="form-input" placeholder="Option B" maxLength="15" onChange={e => this.updateFormState(e)} />
        <span className="error-msg">{this.state.error}</span>
        <p className="btn-start" onClick={this.startPoll}> Start poll </p>
      </form>
    );
  }
}

export default withRouter(PollForm);