import React,{useState} from 'react'
import styled from 'styled-components';

// Styling a regular HTML input
const StyledInput = styled.input`
  display: block;
  margin: 20px 0px;
  border: 1px solid lightblue;
`;

export default function ContohInputWithHooks(defaultValue) {
    const [value, setValue] = useState(defaultValue);
    
    function onChange(e) {
        setValue(e.target.value);
      }

      
  return ({
    value,
    onChange,
})
}
