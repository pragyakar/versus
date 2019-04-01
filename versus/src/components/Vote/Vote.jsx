import React from 'react';
import NotFound from '../commons/NotFound/NotFound';

class Vote extends React.Component {

  state = {
    host: '',
    title: '',
    optionA: '',
    optionB: '',
    optionAcount: 0,
    optionBcount: 0
  }

  componentDidMount() {
    this.setState({
      host: localStorage.getItem('host'),
      title: localStorage.getItem('title'),
      optionA: localStorage.getItem('optionA'),
      optionB: localStorage.getItem('optionB'),
      optionAcount: localStorage.getItem('optionAcount'),
      optionBcount: localStorage.getItem('optionBcount')
    })
  }

  activePollExists = () => {
    const { host, title, optionA, optionB } = this.state;
    if (host === '' || title === '' || optionA === '' || optionB === '') {
      return false;
    } else {
      return true;
    }
  }

  addVote = () => {
    
  }

  render() {
    const { host, title, optionA, optionAcount, optionB, optionBcount } = this.state;
    const activePoll = this.activePollExists();
    return (
      <div className="main-container-lg">
        { activePoll ? 
          <div className="vote-container">
            <p>{title}</p>
            <p>Hosted by: {host}</p>
            <p>{optionA} - {optionAcount}</p>
            <p>{optionB} - {optionBcount}</p>
          </div>
          : <NotFound />
        }
      </div>
    );
  }
}

export default Vote;