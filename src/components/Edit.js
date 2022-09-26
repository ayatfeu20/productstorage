import React, {useState,useEffect} from 'react';
import {Button, Form} from "react-bootstrap";
import Products from './Products';
import {useNavigate, Link} from "react-router-dom";
import {FcCancel} from "react-icons/fc";
import {FaRegEdit} from 'react-icons/fa';

import Swal from "sweetalert2";

function Edit(){
    const[name, setName] = useState('');
    const[type, setType] = useState('');
    const[price, setPrice] = useState('');
    const[id, setId] = useState('');

    let history = useNavigate();
    var index = Products.map(function(e){
        return e.id
       }).indexOf(id);

       const handelSubmit =(e) => {
        e.preventDefault();
   
           
        let a = Products[index];
        a.Name = name;
        a.Type = type;
        a.Price = price;

        history ('/');
        Swal.fire({
          icon: 'success',
          title: 'Yay...',
          text: 'You have successfully edited an existing item!'
        })
       }

       useEffect(() =>{
       setName(localStorage.getItem('Name'))
       setType(localStorage.getItem('Type'))
       setPrice(localStorage.getItem('Price'))
       setId(localStorage.getItem('Id'))
       },[])
     

       return(
<div>
<h3 style={{marginTop:"40px"}}>Edit Product</h3>
 <Form className='d-grid gap-2' style={{margin:"5rem",gap:"2",display:"grid"}}>
    <Form.Group className='mb-5 pb-5'  style={{marginBottom:"4rem"}} controlId='formName'>
      <Form.Control style={{borderColor:"#000000e9"}} type='text' placeholder='Enter The Name' value={name} required onChange={(e)=> setName(e.target.value)}>
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

    <Form.Group className='mb-5' style={{marginBottom:"4rem"}} controlId='formPrice'>
      <Form.Control style={{borderColor:"#000000e9"}} type='text' placeholder='Enter The Price' value={price} required onChange={(e)=> setPrice(e.target.value)}>
      </Form.Control>
    </Form.Group>
    <br></br>
    <br></br>
  <div>
  <Button onClick={(e) => handelSubmit(e)} style={{ width:"10rem",display:"inline-block"}} type="submit"><FaRegEdit size="21" style={{padding:"0px", marginRight:"7px",marginBottom:"-3px"}}/>Edit</Button>
  &nbsp;
  <Link to="/" className="btn btn-danger ml-2" style={{ width:"10rem",display:"inline-block"}}> <FcCancel size="25" style={{padding:"0px", marginRight:"7px",marginBottom:"-7px"}}/>Cancel</Link>
  </div>
 </Form>

       </div>

       )

}

export default Edit;