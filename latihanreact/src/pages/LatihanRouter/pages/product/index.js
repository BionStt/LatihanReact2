import React,{useEffect} from 'react'
import httpService from '../../utils/service'

export default function ProductPage() {
    const fetchProduct = async () =>{
        const response = await httpService.get("/product");
        console.log("response",response.data);
    };
    useEffect(() => {
        fetchProduct();
    },[]);

  return (
    <div>
      
    </div>
  )
}
