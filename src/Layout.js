import React,{Component} from 'react';
import './Layout.css';
import SideNavbar from './Components/SideNavbar/SideNavbar';
import MainContent from './Components/MainContent/MainContent';
import Conversation from './Components/Conversation/Conversation';
class Layout extends Component{
    state={

    }
    render(){
        return (
                // <div class="row h-100">
                //     <div class="col-1 h-100 bg-danger">f</div>
                //     <div class="col-11 h-100 bg-warning">f</div>
                // </div>
            //     <div className="d-flex h-100">
            //      <div className="nav-sidebar bg-success">
            //     </div> 
            //     <div className="main-content bg-warning">
            //     </div>
            // </div>
                <div className="d-flex h-100">
                    <SideNavbar/>
                    <MainContent/>

                </div>
        );
    }
}

export default Layout;