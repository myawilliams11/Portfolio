import React, { Component } from 'react';
import careKeeper from './homeScreen.png';

class Work extends Component {
    render() {
        return (
            <div className="pages">
            <h2>
                projects 
            </h2>  
            <h4>Check out my recent case studies</h4>

            <div id="links">
            <div id="linkIcons">
            <img id="careKeeper" src={careKeeper} alt="careKeeper" height="200" width="200"/>
            </div>

            {/* < img src={careKeeper} alt="careKeeper">pet care application (mobile)</ img> */}
            {/* <button>personal training application (mobile)</button> */}
            </div>
        </div>    
        )
    }
}

export default Work