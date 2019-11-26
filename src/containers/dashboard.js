import React, { Component } from 'react';
import LayoutContentWrapper from '../components/utility/layoutWrapper';
// import LayoutContent from '../components/utility/layoutContent';
import DashboardWidget from './Widgets';
// import { getCountsAppointment } from '../actions/actions';
import { connect } from 'react-redux';
import { Form } from 'antd';

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      appointmentcount :[]
    };
  }

  componentDidMount(){
    const { dispatch } = this.props;
    // dispatch(getCountsAppointment());
  }
  componentDidUpdate(prevProps,preState){
    if (prevProps.count_appointment !== this.props.count_appointment) {
      if(this.props.count_appointment.result.length > 0){
        this.setState({
          appointmentcount : this.props.count_appointment.result,
          loading : false
        });
      }else{
        this.setState({
          loading:false
        })  
      }
    }
  }
  onChange = checked => {
    this.setState({ loading: !checked });
  };

  render() {
    const { count_appointment } = this.props;
    
    return (
      <div>
        <LayoutContentWrapper>
          {/* <LayoutContent>
      <div style={{fontWeight : 400 , fontSize : '20px',justifyItems : 'center',textAlign : 'center'}}>
        <div style={{marginTop : '10px'}}>
          <span style={{marginTop:'20px'}}><b>Welcome to Clinic!</b></span><br/>
          <span>Majestic has developed this client portal so that you can have access to your information at any time.This is especially handy when you are dealing with the Australian Aged Care Quality Agency or are looking for evidence for other events that may occur i.e. an outbreak</span>
        </div>
      </div>
    
        </LayoutContent> */}
          <DashboardWidget count_appointment = {count_appointment} />
        </LayoutContentWrapper>
      </div>
    );
  }
}

Dashboard = Form.create()(Dashboard);
function mapStateToProps(state) {
  const { Common } = state;

  const {
    count_appointment
  } = Common;
  return {count_appointment};
}
export default connect(mapStateToProps)(Dashboard);
