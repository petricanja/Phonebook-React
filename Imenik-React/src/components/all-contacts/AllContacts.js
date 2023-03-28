import React from "react";
import Contact from "../contact/Contact";

function AllContacts(props) {
    return(
        <div>
            {props.contacts.map(function (value, index) {
                return <Contact key={index} contact={value} onContactClick={props.onContactClick} onDeleteContact={props.onDeleteContact}/>
            })}
        </div>
    );
}

export default AllContacts;