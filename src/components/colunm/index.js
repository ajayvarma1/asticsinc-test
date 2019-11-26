let columns = [
  {
    title: 'Patient Name',
    key: 'patient_name',
    width: 200,
    render: 'TextCell',

  },
  {
    title: 'Doctor Name',
    key: 'doctor_name',
    width: 200,
    render: 'TextCell',

  },
  {
    title: 'Token No',
    key: 'appointment_id',
    width: 200,
    render: 'TextCell',

  },
  {
    title: 'Date',
    key: 'appointment_date',
    width: 100,
    render: 'DateCell',

  },
  {
    title: 'Time',
    key: 'slot',
    width: 100,
    render: 'TextCell',

  },
  {
    title: 'Mobile No',
    key: 'mobile_no',
    width: 200,
    render: 'TextCell',

  },
  {
    title: 'Appointment for',
    key: 'appointment_for',
    width: 200,
    render: 'TextCell',
  },
  {
    title: 'Problem',
    key: 'problem',
    width: 200,
    render: 'TextCell',
  },
  {
    title: 'Source',
    key: 'source',
    width: 200,
    render: 'TextCell',
  },

  {
    title: 'Status',
    key: 'status',
    width: 200,
    render: 'SelectCell',
    sorter: (a, b) => a.status.toUpperCase().charCodeAt(0) - b.status.toUpperCase().charCodeAt(0)
  },
  // {
  //   title: 'Add Prescription',
  //   key: 'appointment_id',
  //   width: 200,
  //   render: 'AddCell',

  // },
];

export default columns;