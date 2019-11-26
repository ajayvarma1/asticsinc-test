import React from 'react';
import clone from 'clone';
import {
  DateCell,
  ImageCell,
  LinkCell,
  TextCell,
  PrintCell
} from '../../../components/tables/helperCells';

const renderCell = (object, type, key) => {
  const value = object[key] != null  ? object[key] : '---' ;
  switch (type) {
    case 'ImageCell':
      return ImageCell(value);
    case 'DateCell':
      return DateCell(value);
    case 'LinkCell':
      return  LinkCell('Download',value);
    case 'PrintCell':
      return PrintCell('print',value);
    default:
      return TextCell(value);
  }
};

const columns = [
  {
    title: 'Facility',
    key: 'facility_name',
    width: 200,
    // filters: filter,
    // onFilter: (value, record) => record.facility_name.indexOf(value) === 0,
    render: object => renderCell(object, 'TextCell', 'facility_name')
  },
  {
    title: 'Education Type',
    key: 'education_type',
    width: 200,
    render: object => renderCell(object, 'TextCell', 'education_type')
  },
  {
    title: 'Education',
    key: 'education_name',
    width: 200,
    render: object => renderCell(object, 'TextCell', 'education_name')
  },
  {
    title: 'Date',
    key: 'create_date',
    width: 100,
    render: object => renderCell(object, 'DateCell', 'create_date')
  },
  {
    title: 'Report',
    key: 'pdf_link',
    width: 100,
    render: object => renderCell(object, 'LinkCell', 'pdf_link')
  }
];
const smallColumns = [columns[1], columns[2], columns[3], columns[4]];
const sortColumns = [
  { ...columns[0], sorter: true },
  { ...columns[1], sorter: true },
  { ...columns[2], sorter: true },
  { ...columns[3], sorter: true },
  { ...columns[4], sorter: false },
];
const editColumns = [
  { ...columns[1], width: 300 },
  { ...columns[2], width: 300 },
  columns[3],
];
const groupColumns = [
  columns[0],
  {
    title: 'Name',
    children: [columns[1], columns[2]]
  },
  {
    title: 'Address',
    children: [columns[3], columns[4]]
  }
];
const tableinfos = [
  {
    title: 'Simple Table',
    value: 'simple',
    columns: clone(smallColumns)
  },
  {
    title: 'Sortable Table',
    value: 'sortView',
    columns: clone(sortColumns)
  },
  {
    title: 'Search Text',
    value: 'filterView',
    columns: clone(smallColumns)
  },
  {
    title: 'Editable View',
    value: 'editView',
    columns: clone(editColumns)
  },
  {
    title: 'Grouping View',
    value: 'groupView',
    columns: clone(groupColumns)
  },
  {
    title: 'Customized View',
    value: 'customizedView',
    columns: clone(columns)
  }
];
export { columns, tableinfos };
