import Paragraph from '../Paragraph/Paragraph';
import SelectOption from '../SelectOption/SelectOption';
import { ChangeEvent, ForwardedRef, forwardRef  } from 'react';
import * as S from './style'

interface SelectLabelProps {
  labelText: string;
  optionData: {
    value: string;
    optionText: string;
	}[];
	value: string;
  validateText: string;
  isValid: boolean;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  onBulr: () => void;
}

const SelectLabel = forwardRef(({ labelText, optionData,value, validateText, isValid, onChange, onBulr }: SelectLabelProps, ref:ForwardedRef<HTMLSelectElement>) => {

  return (
		<S.SelectLabelWrap>
      <label>{labelText}</label>
			<SelectOption optionData={optionData} onChange={onChange} onBulr={onBulr} value={value} ref={ref } />
      <Paragraph paragraphText={validateText} $isValid={isValid} />
    </S.SelectLabelWrap>
  );
})

export default SelectLabel;
