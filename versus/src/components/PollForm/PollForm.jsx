import React from 'react';
import Header from '../commons/Header/Header';
import { Link } from 'react-router-dom';

class PollForm extends React.Component {

  state = {
    host: '',
    title: '',
    optionA: '',
    optionB: '',
  }

  startPoll = () => {
    console.log('clicked');
  }


  render() {
    return (
      <div className="main-container">
        <Header />  
        <div className="polls-container">
          <br />
          <form>
            <input type="text" name="host" id="host" className="form-input" placeholder="host name" required />
            <br /><br /><hr/>
            <br />
            <input type="text" name="survey-title" id="survey-title" className="form-input" placeholder="Poll Title" required />
            <br /><br />
            <input type="text" name="optionA" id="optionA" className="form-input" placeholder="Option A" maxLength="15" required />
            <br /><br />
            <input type="text" name="optionB" id="optionB" className="form-input" placeholder="Option B" maxLength="15" required />
            <Link to="/" className="btn-start" onClick={this.startPoll}> Start poll </Link>
          </form>
        </div>
      </div>
    )
  }
}

export default PollForm;