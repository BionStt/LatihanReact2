import React,{ useState} from 'react'
import DatePicker from "react-datepicker";  
import "react-datepicker/dist/react-datepicker.css";  

export default function ContohDateTimePicker() {
    const [data, setData] = useState(new Date());  
  return (
    <div className="container">  
        <div className="hdr">  
                <div className="col-sm-12 btn btn-warning">  
                        Datepicker in ReactJS  
                </div>  
        </div>  
         <DatePicker  
            showPopperArrow={false}  
            placeholderText="Select Date" 
            selected={data} 
            onChange={date => setData(date)} 
          />  


    </div>  
  )
}
