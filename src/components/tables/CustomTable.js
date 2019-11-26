import React, { Component } from 'react';
import TableWrapper from './antTable.style';
// import clone from 'clone';
import {
  DateCell,
  MonthCell,
  YearCell,
  ImageCell,
  LinkCell,
  TextCell,
  PrintCell,
  MultiCell,
  AddCell,
  SelectCell
} from './helperCells';

export default class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [],
      columns: []
    }
    // this.onChange = this.onChange.bind(this); 
  }

  renderCell = (object, type, key) => {
    const value = object[key] != null ? object[key] : '---';
    switch (type) {
      case 'ImageCell':
        return ImageCell(value);
      case 'DateCell':
        return DateCell(value);
      case 'LinkCell':
        return LinkCell('Download', value);
      case 'PrintCell':
        return PrintCell('print', value);
      case 'MultiCell':
        return MultiCell(object, this.props);
      case 'MonthCell':
        return MonthCell(value);
      case 'YearCell':
        return YearCell(value);
      case 'AddCell':
        return AddCell(value);
      case 'SelectCell':
        return SelectCell(object, this.props);
      default:
        return TextCell(value);
    }
  }

  componentDidMount() {
    this.setState({
      dataList: this.props.dataList,
      columns: this.props.columns.map(cl => {
        return {
          ...cl,
          render: object => this.renderCell(object, cl.render, cl.key),
        }
      })
    })
  }

  componentDidUpdate(prevProps, prevState) {

    if (prevProps.dataList !== this.props.dataList) {
      this.setState({
        dataList: this.props.dataList
      })
    }
  }

  // onChange(pagination, filters, sorter) {
  //   const { dataList } = this.props;
  //   if (sorter && sorter.columnKey && sorter.order) {
  //     if (sorter.order === 'ascend') {
  //       dataList.getSortAsc(sorter.columnKey);
  //     } else {
  //       dataList.getSortDesc(sorter.columnKey);
  //     }
  //    // this.setState({ dataList: dataList.getAll()});
  //   }
  // if(filters){
  //  dataList.filters(filters);
  //   this.setState({ dataList: dataList.filters(filters) });
  //   // this.setState({ dataList: dataList.getAll()});
  // }
  // }
  render() {
    return (
      this.state.dataList.length >= 0 && this.state.columns.length > 1 ?
        <TableWrapper
          columns={this.state.columns}
          // onChange={this.onChange}cm
          dataSource={this.state.dataList}
          className="isoSortingTable"
          pagination={this.props.pagination}
          size={this.props.size}
        /> : ''
    );
  }
}
