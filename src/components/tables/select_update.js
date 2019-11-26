import React, { Component, Fragment } from 'react';
import { Select ,Form } from 'antd';
import { connect } from 'react-redux';
import { updateAppointmentStatus } from '../../actions/actions';

const { Option } = Select;

class SelectUdpate extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

 handleChange = (data,value)=> {
  var postData = {
    appointment_id : data.appointment_id,
    status : value
  };

 this.props.dispatch(updateAppointmentStatus(postData));
}

    render() {
        return (
            <Fragment >
                <Select defaultValue={this.props.data.status} style={{ width: 120 }} onChange={this.handleChange.bind(this, this.props.data)}>
                    <Option value="confirmed">Confirmed</Option>
                    <Option value="arrived">Arrived</Option>
                    <Option value="cancel">Cancel</Option>
                </Select>
            </Fragment>
        )
    }
}


SelectUdpate = Form.create()(SelectUdpate);
function mapStateToProps(state) {
    const { Common } = state;

    const {
        update_appointment_status
    } = Common;
    return {
        update_appointment_status
    };
}
export default connect(mapStateToProps)(SelectUdpate);
// export default SelectUdpate;