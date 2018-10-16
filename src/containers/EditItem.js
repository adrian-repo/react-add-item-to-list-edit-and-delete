import React, { Component } from 'react';

class editItem extends Component {

   state = {
    email: this.props.email,
    newEmail: ''
   }

   editItemHandler = (event) => {
    let newState = {...this.state, newEmail: event.target.value};
    this.setState(newState);   
   }
  
   saveHandle = (event) => {
        event.preventDefault();
                  console.log('SAVE');
                  console.log('EDIT ITEM STATE EMAIL',this.state.newEmail);
                  this.props.updateEmail(this.state.newEmail);
        }
   cancelHandle = (event) => {
          event.preventDefault();
                  this.props.cancelHandle();
          }
            

render() {

      return (    
        <div>
        <div className="card">
            <input type="text" defaultValue={this.state.email} onChange={this.editItemHandler} />
            <button onClick={this.saveHandle} className='btn btn-success'>SAVE</button>
            <button onClick={this.cancelHandle} className='btn btn-danger'>CANCEL</button>
        </div>
              
    </div>
      )
    };
 
}

export default editItem;