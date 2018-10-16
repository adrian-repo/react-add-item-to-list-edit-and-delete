import React, { Component } from 'react';

class InputGuest extends Component {

   state = {
    newGuest: '',
   }

   inputGuestHandler = (event) => {
    let newState = {...this.state, newGuest: event.target.value};
    this.setState(newState);   
   }
  
   handleSubmit = (event) => {
        event.preventDefault();
        this.props.submit(this.state.newGuest);  
      }

render() {

      return (    
                  <form className="form-group" onSubmit={this.handleSubmit}>
                    <label>
                      Guest email:
                      <input
                              className="form-input"                  
                              onChange={this.inputGuestHandler}
                      />
                    </label>
                    <input className="btn btn-primary" type="submit" value="Submit" />
                  </form>
      )
    };
 
}

export default InputGuest;