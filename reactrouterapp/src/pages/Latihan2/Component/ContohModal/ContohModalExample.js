import React,{useState} from 'react'
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ContohModalContainer from './ContohModalContainer'

export const MainButton = styled.button`
`;

export default function ContohModalExample(props) {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState({ clicks: 0 });

  return (
    <div>
        <div>Clicks: {data.clicks}</div>
      <MainButton
        onClick={() => {
          setOpen(true);
        }}
      >
        OPEN MODAL
      </MainButton>
      {open && (
        <ContohModalContainer
          {...props}
          setOpen={setOpen}
          data={data}
          setData={setData}
        />
      )}
    </div>
  )
}
