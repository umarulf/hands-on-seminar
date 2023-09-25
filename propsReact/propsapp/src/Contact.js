import React from 'react';

function Contact(props) {

    return(

        <div>
            <h1>{props.name} contact page</h1>
            <label>Email Address</label>
            <input type = "text" />
            <br/>
            <label>Message</label>
            <textarea>
            </textarea>
            <button>Send</button>

        </div>
    )


}
export default Contact;