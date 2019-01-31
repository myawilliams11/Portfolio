import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="pages">
                <h2>
                    contact
                </h2>
                <h4>Thanks for visiting my site, please reach out to connect!</h4>
                <br/>
                <form action="https://formspree.io/myaeliza15@gmail.com" method="POST">
                        <label>name:</label>
                        <input id="inputName"type="text" name="name" />
                        <label >email address:</label>
                        <input id="inputEmail" type="text" name="email"/>
                    <br/>
                        <label id= "inputMessage">message:
                        </label>
                        <input id="inputMessge" type="text" name="Name"style={{width:"360px", height:"200px"}}/>
                    <br/>
                    <input id = "submit" type="submit" value="send"/>
                </form>
            </div>
        )
    }
}

export default Contact