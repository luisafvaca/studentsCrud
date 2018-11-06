import React, {Component} from 'react';
import "./PopUp.css"


class PopUp extends Component {
    render(){
        const isShow = this.props.show ? "show" : "hide";
        return(
            <div className={`pop-up ${isShow}`}>
               <form className="pop-up-form">
                    <label className="pop-up-label"><h1>Name</h1></label>
                    <input className="pop-up-input" value="test"></input>
                    <label className="pop-up-label"><h1>Email</h1></label>
                    <input className="pop-up-input" value="test"></input>
                    <input type="submit" onClick={this.props.clicked} value="Save"></input>
                    <input type="submit" value="Cancel"></input>              
                </form>
            </div>
        )
    }
}

export default PopUp;