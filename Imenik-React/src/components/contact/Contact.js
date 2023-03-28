import React from "react";
import './Contact.css'

function Contact(props) {
    return (

        <div className="directory-contact">

            <div className="directory-contact-content">
                <span className="data">{props.contact.name}: {props.contact.phone}</span>
            </div>

            <div className="directory-contact-date">
                <span className="month">{props.contact.date.toLocaleString('default', {day: 'numeric'})}.{props.contact.date.toLocaleString('default', {month: 'numeric'})}.{props.contact.date.toLocaleString('default', {year: 'numeric'})}.
                </span>
            </div>

            <span className="delete-btn"  title="delete" onClick={(e) => {
                e.stopPropagation();
                props.onDeleteContact(props.contact);
            }}/>
        </div>
    );
}

export default Contact;
