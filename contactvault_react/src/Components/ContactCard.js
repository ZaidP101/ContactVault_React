import React from 'react';
import user from '../Images/user.png';

const ContactCard = (props) => {
    const {id, name, email} =props.contact;
    return(
        <div className="items">
            <img className='ui avtar image' src={user} alt="user"/>
            <div className="content">
                <div className="header">{name}</div>
                <div> {email}</div>
            </div>
            <i 
                className="trash alternate outline icon right floated"
                style={{color: "red", marginTop:"0px", float: 'right', alignSelf: 'center', fontSize: '19px', alignItems:'center', margintop:'-150px'}}
                onClick={()=> props.clickhandler(id)}>
            </i>
        </div>
    );
}

export default ContactCard;