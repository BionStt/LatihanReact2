// import React,{Component} from 'react';
import React,{Component,Fragment} from 'react';

class Fragments extends Component {
    render(){
        // return(  
        //     <Fragment>  
        //          This is my React Application  
        //          <h2>Include Introduction</h2>  
        //          Now moving towards  
        //          <h2>The Complex chapters </h2>  
        //          And provide practical session  
        //      </Fragment>  
        //  );  

        return[  
            "This is my React Application.",  
            <h2 key="heading-1">Include Introduction</h2>,  
            "Now moving towards.",  
            <h2 key="heading-2">The Complex chapters </h2>,  
            "And provide practical session."  
      ];  

        // return[
        //     <p>Test</p>,
        //     <p>Test 1</p>,
        //     <p>Test 2</p>
        // ]


        // return(  
        //     <>  
        //             <p>Test</p>  
        //             <p>Test 1</p>  
        //             <p>Test 2</p>  
        //     </>  
        //     )  


    //     return(  
    //         <Fragment>  
    //                <p>Test</p>  
    //                <p>Test 1</p>  
    //                <p>Test 2</p>  
    //         </Fragment>  
    //         //hasilnya akan sama dengan diatas.. check importnya 
    //  )  
    }
}

export default Fragments;