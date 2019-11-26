import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout } from "antd";
import appActions from "../../redux/app/actions";
import TopbarUser from "./topbarUser";
import TopbarWrapper from "./topbar.style";
import themes from "../../settings/themes";
import { themeConfig } from "../../settings";

const { Header } = Layout;
const { toggleCollapsed } = appActions;
const customizedTheme = themes[themeConfig.theme];

class Topbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      user : localStorage.getItem('full_name'),
      logo : localStorage.getItem('client_logo'),
      // org_name : "Test Clinic" // localStorage.getItem('org_name')
    }
  }

  componentDidMount(){
    
    var self =this;
    setTimeout(function(){
      self.setState({
        user: localStorage.getItem('full_name'),
        logo : localStorage.getItem('client_logo'),
        // org_name : "Test Clinic" // localStorage.getItem('org_name')
      });
      
    },1000)
    
  }
  
  render() {
    const { toggleCollapsed } = this.props;
    const collapsed = this.props.collapsed && !this.props.openDrawer;
    const styling = {
      // color: '#ffffff',
      color: customizedTheme.backgroundColor,
      // background: customizedTheme.backgroundColor,
      background: '#ffffff',
      position: "fixed",
      width: "100%",
      height: 70
    };
    const T = new Date();
    const d = T.getDate();
    const m = T.getMonth() + 1;
    const  y = T.getFullYear();
    const todayDate = d + "/" + m + "/"+y;
    return (
      <TopbarWrapper>
        <Header
          style={styling}
          className={
            collapsed ? "isomorphicTopbar collapsed" : "isomorphicTopbar"
          }
        >
          <div className="isoLeft">
            <button
              className={
                collapsed ? "triggerBtn menuCollapsed" : "triggerBtn menuOpen"
              }
              style={{ color: '#00000' }}
              onClick={toggleCollapsed}
            />
          </div>
          <div>
              {/* <span style={{marginRight:'20px'}}>
                <img src={'https://majesticla.s3.amazonaws.com/facility_portal/'+this.state.logo} style={{height:"50px"}} alt='majestic'/>
              </span> */}
              <span style={{fontSize:'23px',textTransform: "uppercase"}}>
              <span>
                { this.state.org_name}
              </span>
            </span>
          </div>
          <ul className="isoRight">
          <li>
              <b>Date : </b>{ todayDate}
            </li>
            <li> 
            
              {
                this.state.user 
              }
              </li>
            
            <li
              onClick={() => this.setState({ selectedItem: "user" })}
              className="isoUser"
            >
              <TopbarUser userIconColor={customizedTheme.backgroundColor} style={{border : '1px solid black'}} />
            </li>
          </ul>
        </Header>
      </TopbarWrapper>
    );
  }
}

export default connect(
  state => ({
    ...state.App
  }),
  { toggleCollapsed }
)(Topbar);
