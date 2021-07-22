import React,{Component} from 'react';
import './Conversation.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
class Conversation extends Component{
    render(){
        return (
                <div className="conversation flex-cloumn h-100">
                    <div className="conv-header">
                        <h4>Conversations</h4>
                    </div>
                    <div className="conv-nodes active">
                        <div className="row">
                            <div className="col-2 ck-box">
                                <Input type="checkbox"/>
                            </div>
                            <div className="col-8"> 
                            <div>
                            <strong>John Doe</strong>
                            <p>FB DM</p>
                            </div>
                            </div>
                        </div>
                        <div className="node-content">
                            <strong>Available in Store?</strong>
                            <p>some text will be there</p>
                        </div>
                    </div>
                    <div className="conv-nodes">
                        <div className="row">
                            <div className="col-2 ck-box">
                                <Input type="checkbox"/>
                            </div>
                            <div className="col-8"> 
                            <div>
                            <strong>John Doe</strong>
                            <p>FB DM</p>
                            </div>
                            </div>
                        </div>
                        <div className="node-content">
                            <strong>Available in Store?</strong>
                            <p>some text will be there</p>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Conversation;