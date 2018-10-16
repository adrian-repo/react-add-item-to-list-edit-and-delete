import React from 'react';


const listItem = ({email, deleteItem, hitEditItem}) => {

    

     return (
        <div>
            <div className="card">
                <h6> Guest email: {email}</h6>
                <button onClick={deleteItem} className='btn btn-danger'>DEL</button>
                <button onClick={hitEditItem} className='btn btn-primary'>EDIT</button>
            </div>
                  
        </div>
    );
}

export default listItem;