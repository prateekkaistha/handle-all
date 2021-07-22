import React,{Component} from 'react';
import './UserInfo.css';
class UserInfo extends Component{
    render(){
        return (
            <div className="userinfo">
                <div className="user-profile flex-column">
                    
                </div>
                <div className="user-details flex-column">
                    <div className="description">
                        <div>
                            <h7>Customer Details</h7>
                        </div>
                        <div className="d-flex w-100">
                                <div className="justify-content-start">
                                    <p>First Name</p>
                                </div>
                                <div className="justify-content-end">
                                    <p>John</p>
                                </div>
                        </div>
                        
                        <div className="d-flex w-100">
                                <div className="justify-content-start">
                                    <p>Last Name</p>
                                </div>
                                <div className="justify-content-end">
                                    <p>Doe</p>
                                </div>
                        </div>
                        <div className="d-flex w-100">
                                <div className="justify-content-start">
                                    <p>Email</p>
                                </div>
                                <div className="justify-content-end">
                                    <p>John@gmail.com</p>
                                </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default UserInfo;