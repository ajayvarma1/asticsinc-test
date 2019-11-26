import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { Link  } from 'react-router-dom';
import LayoutWrapper from '../../components/utility/layoutWrapper.js';
import basicStyle from '../../settings/basicStyle';
import IsoWidgetsWrapper from './widgets-wrapper';
// import IsoWidgetBox from './widget-box';
import StickerWidget from './sticker/sticker-widget';
import IntlMessages from '../../components/utility/intlMessages';
import { connect } from 'react-redux';

var widgets = [
  {
    name : 'sidebar.today',
    logo : 'ion-email-unread',
    icon : 'ion-university',
    bgcolor : '#102203',
    path : 'appointment/today'
  }
  ,
  {
    name : 'sidebar.tomorrow',
    logo : 'ion-clipboard',
    icon : 'ion-clipboard',
    bgcolor : '#023480',
    path : 'appointment/tomorrow'
  },
  {
    name : 'sidebar.week',
    logo : 'ion-calendar',
    icon : 'ion-calendar',
    bgcolor : '#800560',
    path : 'appointment/week'
  },
  {
    name : 'sidebar.monthly',
    logo : 'ion-happy-outline',
    icon : 'ion-happy-outline',
    bgcolor : '#178',
    path : 'appointment/monthly'
  },
]

 export default class WidgetsWrapper extends Component {
   constructor(props){
     super(props);
     this.state ={
        monthly_count :0,
        weekly_count : 0,
        today_count : 0,
        tomorrow_count : 0
     }
   }
   componentDidUpdate(prevProps,preState){
    if (prevProps.count_appointment !== this.props.count_appointment) {
      if(this.props.count_appointment.result.length > 0){
        var count = this.props.count_appointment.result;

        this.setState({
          monthly_count : count[0][0]['monthly_count'],
          weekly_count : count[1][0]['weekly_count'],
          tomorrow_count : count[2][0]['tomorrow_count'],
          today_count : count[3][0]['today_count'],

          loading : false
        });
      }else{
        this.setState({
          loading:false
        })  
      }
    }
   }
  render() {
    const {count_appointment} = this.props;
    const { rowStyle, colStyle } = basicStyle;
    const {monthly_count ,weekly_count ,tomorrow_count ,today_count} = this.state;
    const wisgetPageStyle = {
      display: 'flex',
      flexFlow: 'row wrap',
      alignItems: 'flex-start',
      overflow: 'hidden',
      width:'100%'
    };
  
    return (
        <div style={wisgetPageStyle}>
          <Row  gutter={10} justify="start" style={rowStyle}>
            {
              widgets.map( (widget) => {
                return <Col lg={6} md={6} sm={24} xs={24} style={colStyle} key={widget.name}>
                  <Link to={'/dashboard/'+widget.path}>
                <IsoWidgetsWrapper>
                  <StickerWidget
                    text={<IntlMessages id={widget.name =='sidebar.today' ? `Today - ${today_count}` :  widget.name =="sidebar.tomorrow" ? `Tomorrow - ${tomorrow_count}` :  widget.name =="sidebar.week" ? `Weekly - ${weekly_count}` :  widget.name =="sidebar.monthly" ? `Monthly - ${monthly_count}`: "l"  } />}
                    icon={widget.icon}
                    fontColor="#ffffff"
                    bgColor={widget.bgcolor}
                  />
                </IsoWidgetsWrapper>
                </Link>
              </Col>
              })
            }
          </Row>
        </div>
    );
  }
}
