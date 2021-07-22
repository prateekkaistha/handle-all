import React,{Component} from 'react';
import './MainMessaging.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class MainMessaging extends Component{
    render(){
        return (
                <div className="main-messaging ">
                        <div className="message-to">
                            <h4>John Doe</h4>
                        </div>
                        <div className="message-display">

                        </div>
                        <div className="type-message">
                            <Input type="text" name="message" id="exampleEmail" placeholder="Message" />
                        </div>
                </div>
        );
    }
}

export default MainMessaging;