import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Input from '../../components/uielements/input';
import Checkbox from '../../components/uielements/checkbox';
import Button from '../../components/uielements/button';
// import authAction from '../../redux/auth/actions';
import IntlMessages from '../../components/utility/intlMessages';
import UserStyleWrapper from './user.style';
import {
  Form,notification ,Table,  Popconfirm ,Modal
} from "antd";
import { siteConfig } from '../../settings';
import { addUser ,getUserList,deleteUser } from '../../actions/actions';


class User extends Component {
  constructor(props){
  super(props)
  this.state = {
    visible :false,
    data:[],

    loading :false
  };
  this.columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      width: '30%',
      editable: true,
    },
    {
      title: 'Body',
      dataIndex: 'body',
    },
    {
      title: 'User ID',
      dataIndex: 'userId',
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (text, record) =>
        this.state.data.length >= 1 ? (
          <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.id)}>
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];
  }
  handleDelete = id => {
    console.log(id)
    this.props.dispatch(deleteUser(id));
  };

  handleAdd = () => {
    this.setState({
      visible: true,
    });
  };

  componentDidMount(){
    this.props.dispatch(getUserList());
  }
  componentDidUpdate(prevProps, prevState) {
    let self = this;
    if (prevProps.get_user !== self.props.get_user) {
       self.setState({
         data:self.props.get_user
       })
    }
    if (prevProps.del_user !== self.props.del_user) {
      notification['success']({
        message: 'Deleted sucessfuly !!!',
        description:'',
      });
   }
    if (prevProps.add_user !== self.props.add_user) {
        self.setState({
          loading:false
        });
        if(self.props.add_user.length !=0){      
          notification['success']({
            message: 'Added sucessfuly !!!',
            description:'',
          });
        }else{
          notification['error']({
            message: 'Something went wrong !!!',
            description:'',
          });
        }
    }
  }
  handleAddUser = (e) => {
    var self = this;
   
    const { dispatch } = this.props;
    e.preventDefault();


    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.setState({
          loading :true ,
          visible: false,
        });
        console.log(values)
        dispatch(addUser(values));
      }
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

render() {
    const from = { pathname: '/dashboard' };
    const { getFieldDecorator } = this.props.form;
    const { redirectToReferrer  ,loading,dataSource } = this.state;
   
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          // handleSave: this.handleSave,
        }),
      };
    });


    return (
      
      <div style={{width:'100%',display:'block',height:'100%'}}>
        <Modal
          title="Add User Detail"
          visible={this.state.visible}
          onOk={this.handleAddUser}
          onCancel={this.handleCancel}
        >
        <UserStyleWrapper className="isoSignInPage">
        <div className="isoLoginContentWrapper">
          <div className="isoLoginContent">
            <div className="isoSignInForm">
            <Form onSubmit={this.handleAddUser} className="login-form">
        <Form.Item>
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Please input your Title!' }],
          })(
              <div className="isoInputWrapper">
                <Input size="large" placeholder="Title" />
              </div>
          )}
          </Form.Item>
         
          <Form.Item>
          {getFieldDecorator('body', {
            rules: [{ required: true, message: 'Please input your body!' }],
          })(
              <div className="isoInputWrapper">
                <Input size="large" type="text" placeholder="Body"  />
              </div>
          )}
          </Form.Item>
          <Form.Item>
          {getFieldDecorator('userId', {
            rules: [{ required: true, message: 'Please input your id!' }],
          })(
              <div className="isoInputWrapper">
                <Input size="large" type="number" placeholder="Number"  />
              </div>
          )}
          </Form.Item>
              {/* <div className="isoInputWrapper isoLeftRightComponent">
                <Button type="primary"  htmlType="submit" loading={loading} style={{backgroundColor : '#3f51b5',width:'100%'}}>
                  <IntlMessages id="page.signInButton" />
                </Button>
              </div> */}
              </Form>
              
            </div>
          </div>
        </div>
      </UserStyleWrapper> 
    
            </Modal>
        <div>
        <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
          Add a row
        </Button>
        <Table
          // components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={this.state.data}
          columns={columns}
        />
      </div>    
      </div>
    );
  }
}
User = Form.create()(User);
function mapStateToProps(state) {
  
  const { Common } = state;
  const { 
    add_user ,get_user ,del_user
  } = Common;

  return {
    add_user ,get_user ,del_user
  };
}

const AppContainer = connect(mapStateToProps)(User);
export default AppContainer;

