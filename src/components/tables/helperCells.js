import React from 'react';
import ImageCellView from './imageCell';
import DeleteCell from './deleteCell';
import EditableCell from './editableCell';
import FilterDropdown from './filterDropdown';
import { Button, Input, Select } from 'antd';
import Subpopover from './popover';
import { Link } from 'react-router-dom';
import SelectUpdate from './select_update';
const { TextArea } = Input;


const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const DateCell = (data) => {
  let dataDate = new Date(data);
  let m = dataDate.getMonth() + 1;
  return dataDate.getDate() + "/" + m + "/" + dataDate.getFullYear();
}

const MonthCell = (data) => {
  let dataDate = new Date(data);
  let m = dataDate.getMonth();
  return monthNames[m];
}

const YearCell = (data) => {
  let dataDate = new Date(data);
  return dataDate.getFullYear();
}

const ImageCell = src => <ImageCellView src={src} />;
const LinkCell = (link, href) => <a href={href ? href : '#'}>{link}</a>;
const TextCell = text => <p>{text ? text : '---'}</p>;
const PrintCell = (link, href) => {
  return <a href={'javascript: w=window.open("https://docs.google.com/viewerng/viewer?url=' + href + '");w.stop()'} >{link}</a>
}
const AddCell = (ID) => {
  console.log(ID, "------------------------>")
  // return <Button type="primary" ghost>Add Prescription</Button>
  return <Link to={"/dashboard/prescription/" + ID}>Add Prescription</Link>
}

const MultiCell = (data, props) => {
  var EmailText = "";
  const hide = () => {
  }


  return <div style={{ display: "inline-block" }}>
    <a className={"ant-btn ant-btn-primary"} style={{ color: "white", borderRadius: "unset" }} href="" >{'View'}</a>
    <Subpopover data={data} />

  </div>
}
// function handleChange(id,value) {
//   console.log(value,id);
//   var post = {
//     appointment_id : id,
//     status : value
//   }
// //  this.props.dispatch(updateAppointmentStatus(post));
// }
const SelectCell = (data, props) => {
  return (<SelectUpdate data={data} ></SelectUpdate>)
}

export {
  DateCell,
  MonthCell,
  YearCell,
  ImageCell,
  LinkCell,
  TextCell,
  EditableCell,
  DeleteCell,
  PrintCell,
  FilterDropdown,
  MultiCell,
  AddCell,
  SelectCell
};
