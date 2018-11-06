import React, {Component} from 'react';
import "./PopUp.css"


class PopUp extends Component {
    render(){
        const isShow = this.props.show ? "show" : "hide";
        const userId = this.props.itemEdit.id;
        const currentName = this.props.itemEdit.name;
        const currentEmail = this.props.itemEdit.email;
        
        return(
            <div className={`pop-up ${isShow}`}>
               <form className="pop-up-form" id={userId} onSubmit={this.props.submit}>
                    <label className="pop-up-label"><h1>Name</h1></label>
                    <input className="pop-up-input" placeholder={currentName}></input>
                    <label className="pop-up-label"><h1>Email</h1></label>
                    <input className="pop-up-input" placeholder={currentEmail}></input>
                    <input type="submit" value="Save"></input>
                    <input type="submit" value="Cancel"></input>              
                </form>
            </div>
        )
    }
}

export default PopUp;