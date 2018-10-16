import React, { Component } from 'react';
import ListItem from '../components/ListItem';
import EditItem from './EditItem';

class displayList extends Component {
    state = {
        index:null,
        activeEdit:false
    }
   
    hitEditHandler = (indexPos) => {
        console.log('edit was hit');
        let newState = {...this.state, index: indexPos, activeEdit:true};
        this.setState(newState);  
    }

    updateEmailHandler = (newEmail, index) => {
        console.log('[DISPLAY LIST PROPS NEW EMAIL AND INDEX]', newEmail, index )
       this.props.editEmail(newEmail, index);       
       let newState = {...this.state, index: null, activeEdit:false};
       this.setState(newState);  
    console.log('[updated email in Display JS]', newEmail, index)
    }


    cancelUpdateHandler = (newEmail, index) => {
       let newState = {...this.state, index: null, activeEdit:false};
       this.setState(newState);  

    }

    render() {

        console.log('DISPLAY MODULE', this.props.emailsList)
        const displayItems = this.props.emailsList.map(
                    (elem, index) => {
                        if (index === this.state.index && this.state.activeEdit) {
                            return <EditItem 
                                    key={index} 
                                    email={elem} 
                                    updateEmail={(newEmail)=> this.updateEmailHandler(newEmail, index)} 
                                    cancelHandle={()=> this.cancelUpdateHandler(index)}                                                                     
                             />

                        } else {
                                   return <ListItem 
                                        key={index} 
                                        email={elem} 
                                        deleteItem={() => this.props.delete(index)}
                                        hitEditItem={() => this.hitEditHandler(index)}                                    
                                    />
                                } // end else
                    } 
                    )// end of map

        return (
            <div className="jumbotron">
                {displayItems}
            </div>
        );

    }
  
}


export default displayList;