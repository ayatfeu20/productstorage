import React, {useState} from 'react';
import {Button, Form} from "react-bootstrap";
import Products from './Products';
import {v4 as uuid} from "uuid";
import {useNavigate, Link} from "react-router-dom";
import {MdSaveAlt} from "react-icons/md";
import {FcCancel} from "react-icons/fc";
import Swal from "sweetalert2";


function Add(){
   const[name, setName] = useState('');
   const[price, setPrice] = useState('');
   const[type, setType] = useState('');

   const [errorMsg, setErrorMsg] = useState('');
    
   let history = useNavigate();
   const values = [name, type, price];

  const handelSubmit =(e) => {
     e.preventDefault();
     let errorMsg = '';
            
     const allFieldsFilled = values.every((field) => {
     const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });
     
     if (allFieldsFilled) {

    
    
     const ids = uuid();
     let uniqueId = ids.slice(0,8);
    
     let a = name,
     b = type,
     c = price;
    
     {
     
     Products.push({id: uniqueId, Name : a, Type: b, Price :c});
     history ('/');
     Swal.fire({
      icon: 'success',
      title: 'Yay...',
      text: 'You have successfully added a new product!'
  })
}
     }
     else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  

   };

  
    return(
<div className='form-main'>
{errorMsg && <p className="errorMsg text-danger" style={{marginTop:"15px", color:"red"}}>{errorMsg}</p>}
  <h3 style={{marginTop:"40px"}}>Create New Product</h3>
  <Form style={{margin:"5rem",gap:"2",display:"grid"}}>
    <Form.Group style={{marginBottom:"4rem"}} controlId='formName'>
      <Form.Control style={{borderColor:"#000000e9"}} type='text' placeholder='Enter The Name' required value={name}  onChange={(e)=> setName(e.target.value)}>
      </Form.Control>
    </Form.Group>
    <br></br>
    <br></br>

    <Form.Group className='mb-3' style={{marginBottom:"4rem"}} controlId="formBasicSelect">
      <Form.Control style={{borderColor:"#000000e9"}} placeholder='Please choose the type' as="select" value={type} onChange={(e)=> setType(e.target.value)}>
          <option value="" className='text-light'>--Please choose Product Type</option>
          <option value="Peripheral">Peripheral</option>
          <option value="Integrated">Integrated</option>
      </Form.Control>
    </Form.Group>
    <br></br>
    <br></br>

    <Form.Group className='mb-3'style={{marginBottom:"4rem"}} controlId='formPrice'>
      <Form.Control style={{borderColor:"#000000e9"}} type='number' placeholder='Enter The Price' required onChange={(e)=> setPrice(e.target.value)}>
      </Form.Control>
    </Form.Group>
  <div> 
  <Button onClick={(e) => handelSubmit(e)} type="submit" style={{ width:"10rem",display:"inline-block"}}><MdSaveAlt size="25" style={{padding:"0px", marginRight:"7px",marginBottom:"-7px"}}/>Save</Button>
  &nbsp;
  <Link style={{width:"10rem",display:"inline-block"}} to="/" className="btn btn-danger"><FcCancel size="25" style={{padding:"0px", marginRight:"7px",marginBottom:"-7px"}}/>Cancel</Link>
  </div>
 </Form>

</div>

    )

}

export default Add;
