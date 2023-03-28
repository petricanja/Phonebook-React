import React from "react";
import "./NewContact.css"

class NewContact extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            contentName: "",
            contentPhone: ""
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
    }

    handleChangeName = event => {
        this.setState({contentName: event.target.value});
    }
    handleChangePhone = event => {
        this.setState({contentPhone: event.target.value});
    }

    render() {
        return (
            <div id="new-contact" onSubmit={this.handleSubmit}>
                <input id="contact-name"
                       value={this.state.contentName}
                       onChange={this.handleChangeName}
                       type="text"
                       placeholder="insert contact name"/>

                <input id="contact-number"
                       value={this.state.contentPhone}
                       onChange={this.handleChangePhone}
                       type="text"
                       placeholder="insert phone"
                />

                <span id="add-btn"
                       onClick={() => this.props.createContact(this.state.contentName, this.state.contentPhone)}>
                    Add new contact </span>
            </div>)
    };
}

export default NewContact;