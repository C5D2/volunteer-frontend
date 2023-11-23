import React, {ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components'
const StSelect = styled.select`
  font-size: 16px;
`
interface SelectProps extends React.HTMLProps<HTMLSelectElement> {
  children: React.ReactNode;
}

const Select = forwardRef(({ children, ...props }: SelectProps, ref: ForwardedRef<HTMLSelectElement>) => {
  return <StSelect {...props} ref={ref}>{children}</StSelect>;
})
export default Select;
