import React,{Component} from 'react';
import './MainContent.css';
import Conversation from '../Conversation/Conversation';
import MainMessaging from '../MainMessaging/MainMessaging';
import UserInfo from '../UserInfo/UserInfo';
class MainContent extends Component{
    render(){
        return (
                <div className="d-flex main-content bg-primary h-100">
                    <Conversation/>
                    <MainMessaging/>
                    <UserInfo/>
                </div>
        );
    }
}

export default MainContent;