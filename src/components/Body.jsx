import React, { useState } from 'react'
import { MDBBtn } from 'mdb-react-ui-kit';
function Body() {
    const [msg,setMsg]=useState()
    function fun1(){
        setMsg("Hello Welcome All!")
    }
    function fun2(){
        setMsg(null)
    }
  return (
    <div style={{backgroundColor:"black", color:"white"}}>
        <div className='p-2 mt-3 text-center bg-"warning" border border-3 border-primary'>
<img src="https://media.tenor.com/77zvGSPusxUAAAAC/app.gif" alt="" />
<h1>{msg}</h1>
<div>
<MDBBtn rounded onClick={fun1}>Discover</MDBBtn>
<MDBBtn rounded onClick={fun2} color='warning'>
        Seek
      </MDBBtn>
</div>
        </div>
    </div>
  )
}

export default Body