import { ChangeEvent,ForwardedRef, forwardRef } from 'react';
import Option from '../Option/Option';
import Select from '../Select/Select';

interface SelectOption {
  value: string
  optionData: {
    value: string;
    optionText: string;
  }[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
  onBulr: () => void
}

const SelectOption = forwardRef(({ optionData, onChange, onBulr, value }: SelectOption, ref: ForwardedRef<HTMLSelectElement>) => {
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange(event);
  };

  const handleSelectBulr = () => {
    onBulr();
  };

  return (
    <Select onChange={handleSelectChange} onBlur={handleSelectBulr} value={value} name="categoryType" ref={ref}>
      {optionData.map((dataItem) => (
        <Option key={dataItem.value } value={dataItem.value} optionText={dataItem.optionText} />
      ))}
    </Select>
  );
})

export default SelectOption;
