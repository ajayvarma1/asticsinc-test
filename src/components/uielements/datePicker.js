import { DatePicker } from 'antd';
import AntDatePicker from './styles/datePicker.style';

const Datepicker = AntDatePicker(DatePicker);
const DateRangepicker = AntDatePicker(DatePicker.RangePicker);
const MonthPicker = AntDatePicker(DatePicker.MonthPicker);

export default Datepicker;
export { DateRangepicker };
export { MonthPicker };
