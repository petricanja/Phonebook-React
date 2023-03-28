import React from "react";
import "./PhoneDirectory.css"
import AllContacts from "../all-contacts/AllContact";

function PhoneDirectory(props) {
    return (
        <div id="phone-directory">
            <div id="all-contacts" className="contacts-container">
                <div id="all-contacts-container">
                    <span className="no-contacts">No Contacts</span>
                    <AllContacts contacts={props.contacts} onContactClick={props.onContactClick} onDeleteContact={props.onDeleteContact}/>
                </div>
            </div>
        </div>
    )
}
export default PhoneDirectory;