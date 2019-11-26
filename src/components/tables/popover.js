import React, { Component, Fragment } from 'react'
import { Button, Popover, Input, Form } from 'antd';
// import Axios from 'axios';
// import { sendEmail } from '../../actions/actions';
import { connect } from 'react-redux';



const { TextArea } = Input;


class Subpopover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailtext:'',
            visible: false
        }
    }
    handleClick = () => {
        console.log(this.props.data)
        this.setState({
            visible: !this.state.visible
        })
    }
    // onChangeEmailText = ({ target: { value } }) => {
    //     this.setState({ emailtext: value });
    // };
    handleSubmit = (e) => {
        // console.log(this.props.data)
       
        var data = this.props.data;
        var pdf = '';
        var subject = '';
        pdf = data.pdf_url;
        var str =  pdf;
        var res = str.split("/");
        res = res[res.length-1]
        if(res.substr(-4) != ".pdf"){
            res = res+'.pdf';
        }
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {

            console.log('Received values of form: ', values);

            var email = values.email;

            var Email_data = {
            "email_list": email,
            "attachments": [{
                "filename": res,
                "path":pdf
            }],
            "html_body": "",
            "subject": subject

        };
        console.log(Email_data)
        // this.props.dispatch(sendEmail(Email_data));
        this.setState({
            visible: !this.state.visible
        })
          }
        });
    }

    // componentDidUpdate(prevProps, prevState) {
  
    // }
    handleVisibleChange = visible => {
        this.setState({visible});
    }
    render() {
        const { visible } = this.state;
        const { getFieldDecorator } = this.props.form;

        return (
            <Form onSubmit={this.handleSubmit} style={{maxWidth: "300px",display:"inline-block",marginLeft:"10px"}}>
                <Popover
                    content={
                       <Fragment>
                        <span>Separate emails with commas </span>
                        <Form.Item>
                            {getFieldDecorator('email', {
                                rules: [{ required: true, message: 'Please input your email id!', initialValue: '', }],
                            })(
                                <TextArea
                                   
                                    onChange={this.onChangeEmailText}
                                    placeholder=""
                                    autosize={{ minRows: 5, maxRows: 9 }}
                                    style={{ marginBottom: 20 }}
                                />
                            )}
                        </Form.Item>
                        <div style={{ textAlign: "left" }}>
                            <div style={{display:"inline-block",marginLeft:"10px"}}>
                            <Button onClick={this.handleClick} >Close</Button>
                            </div>
                            <div style={{display:"inline-block",marginLeft:"10px"}}>
                            <Button type="danger" onClick={this.handleSubmit} style={{ marginRight: 20 }}>Send</Button>
                            </div>
                        </div>
                        </Fragment> 
                }
                    title="Additional Emails"
                    trigger="click"
                    visible={visible}
                    onVisibleChange={this.handleVisibleChange}
                >
                    <Button onClick={this.handleClick}>Email</Button>
                </Popover>
            </Form>
        )
    }
}
Subpopover = Form.create()(Subpopover);
function mapStateToProps(state) {
    const { Common } = state;
    // const {
    //   login_user_data: login_user_data ,isLoggedIn :isLoggedIn ,  login_status_data : login_status_data : education_report_data,facility_list : facility_list
    // } = Common;

    const {
        send_email
    } = Common;
    return {
        send_email
    };
}

export default connect(mapStateToProps)(Subpopover);