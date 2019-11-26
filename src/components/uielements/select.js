import { Select } from 'antd';
import { AntSelect } from './styles/select.style';
import WithDirection from '../../settings/withDirection';

const WDSelect = AntSelect(Select);
const IsoSelect = WithDirection(WDSelect);
const SelectOption = Select.Option;

export default IsoSelect;
export { SelectOption };
