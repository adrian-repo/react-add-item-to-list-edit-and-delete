import React, { Component } from 'react';
import './App.css';
import DisplayList from './containers/DisplayList';
import InputGuest from './containers/InputGuest';

class App extends Component {
 
    state = {
      emails: []
    }

handleInputSubmit = (elem) => {
  const newEmailArray = [...this.state.emails];
  newEmailArray.push(elem);
  const newState = {...this.state.emails, emails:newEmailArray}
  this.setState(newState);
}

deleteGuestHandler = (emailIndex) => {
  const newEmailArray = [...this.state.emails]; 
  newEmailArray.splice(emailIndex,1);
  const newState = {...this.state.emails, emails:newEmailArray}
  this.setState(newState);
  console.log('New State', newState)
}

editEmailHandler = (newVal, index) => {
    console.log('[APP JS new Value]', newVal, index);
    const newEmailsList = [...this.state.emails];
    newEmailsList.splice(index, 1, newVal);
    this.setState({emails: newEmailsList});

}

  render() {
    return (

      <div className="container-fluid">
      
        <InputGuest submit={this.handleInputSubmit} />
        <DisplayList 
              emailsList={this.state.emails} 
              delete={this.deleteGuestHandler} 
              editEmail={this.editEmailHandler} />

      </div>
    );
  }
}

export default App;
