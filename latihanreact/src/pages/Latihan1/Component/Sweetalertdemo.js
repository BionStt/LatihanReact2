import Swal from 'sweetalert2'
import React from 'react'

const Sweetalertdemo = () => {
   const HandleClick = () => {  
        Swal.fire({  
          title: 'Success',  
          type: 'success',  
          text: 'Your work has been saved.',  
        });  
      }
    
    const  HandleClick1=()=> {  
        Swal.fire({  
          title: 'Are you sure?',  
          text: 'User will have Admin Privileges',  
          icon: 'warning',  
          showCancelButton: true,  
          confirmButtonColor: '#3085d6',  
          cancelButtonColor: '#d33',  
          confirmButtonText: 'Yes!'  
        });  
      }  

     const HandleClick12=()=> {  
        Swal.fire({  
          icon: 'error',  
          title: 'Oops...',  
          text: 'Something went wrong!',  
          footer: '<a href>Why do I have this issue?</a>'  
        });  
      }  

      const HandleClicktop=()=> {  
        Swal.fire({  
          position: 'top-end',  
          icon: 'success',  
          title: 'Your work has been saved',  
          showConfirmButton: false,  
          timer: 1500  
        });  
      }  

      const HandleClickAutoclose =()=> {  
        let timerInterval  
        Swal.fire({  
          title: 'Auto close alert!',  
          html: 'I will close in <b></b> milliseconds.',  
          timer: 1000,  
          timerProgressBar: true,  
          onBeforeOpen: () => {  
            Swal.showLoading()  
            timerInterval = setInterval(() => {  
              const content = Swal.getContent()  
              if (content) {  
                const b = content.querySelector('b')  
                if (b) {  
                  b.textContent = Swal.getTimerLeft()  
                }  
              }  
            }, 100)  
          },  
          onClose: () => {  
            clearInterval(timerInterval)  
          }  
        }).then((result) => {  
          if (result.dismiss === Swal.DismissReason.timer) {  
            console.log('I was closed by the timer')  
          }  
        })  
      }  
    
    return (
    <div>
        <div className="hdr">  
          <div className="col-sm-12 btn btn-info">  
            SweetAlert2 In React  
        </div>  
        </div>  
        <div style={{ "paddingTop": "10px" }}>  
          <button className="btn btn-info btn" onClick={HandleClick}>Success</button>  
          <button className="btn btn-success btn" onClick={HandleClick1}>Confirm</button>  
          <button className="btn btn-primary btn" onClick={HandleClick12}>Confirm Box</button>  
          <button className="btn btn-primary btn" onClick={HandleClicktop}>Top Side</button>  
          <button className="btn btn-primary btn" onClick={HandleClickAutoclose}>Auto Close</button>  
  
        </div>  
    </div>
  )
}

export default Sweetalertdemo
