import React from "react";
import {Table, Button} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom'
import Products from './Products';
import {FiPlusCircle} from 'react-icons/fi';
import {FaRegEdit} from 'react-icons/fa';
import {MdDeleteOutline} from 'react-icons/md';
import Swal from "sweetalert2";


function Home() {
let history = useNavigate();


const handelEdit = (id, name , type ,price) => {
 localStorage.setItem('Name',name);
 localStorage.setItem('Type',type);
 localStorage.setItem('Price',price);
 localStorage.setItem('Id',id);


}

const handelDelete = (id) => {

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-danger',
      cancelButton: 'btn btn-success'
    },
    buttonsStyling: true
  })
  
  swalWithBootstrapButtons.fire({
    title: 'Are you sure?',
    text: "You want to delete this item!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes,Delete it!',
    cancelButtonText: 'No,Cancel!',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
    var index = Products.map(function(e){
    return e.id
   }).indexOf(id);
   Products.splice(index,1);
      history('/');
 }

 } 
 
  )}


    return(
    <div className="container" >
    <React.Fragment >
         
    <div style={{marginTop:"8rem",textAlign:"center", backgroundColor:"#effcde", paddingBottom:"10px"}}>
      <h3 style={{textAlign:"left",backgroundColor:"green", color:"white", padding:"10px"}}>Items</h3>
       <Table striped bordered hover responsive="sm" size="sm" style={{textAlign:"center"}}>
        <thead >
          <tr><th style={{textAlign:"center"}}>Name</th>
            <th style={{textAlign:"center"}}>Type</th>
            <th style={{textAlign:"center"}}>Price</th></tr>
        </thead>
        <tbody>
            {
          Products && Products.length > 0  
          ?
          Products.map((item) => {
            return(
              <tr>
                <td>{item.Name}</td>
                <td>{item.Type}</td>
                <td>{item.Price}</td>
               <td>
                <div>
                <Link to={'/edit'}>
                <Button size="sm" onClick={() => handelEdit(item.id,item.Name,item.Type,item.Price)} style={{width:"6rem",display:"inline-block"}}><FaRegEdit size="16" style={{padding:"0px", marginBottom:"-3px"}}/>Edit</Button>
                </Link>
                &nbsp;
                <Button variant="danger" size="sm" onClick={() => handelDelete(item.id)} style={{width:"6rem",display:"inline-block",}} ><MdDeleteOutline size="16" style={{padding:"0px",marginBottom:"-3px"}}/>Delet</Button>
                </div>
               </td>
            </tr>
            )
          })
          :
          "You do not have any products! Press the green below button to add a new one"
        } 
        </tbody>
       </Table>
       <br>
       </br>
       <Link className="d-grid gap-2"  to="/create"> <Button className="btn btn-success " size="m"  ><FiPlusCircle size="25" style={{padding:"0px", marginRight:"7px",marginBottom:"-7px"}}/>Add New Product</Button></Link>
    </div>
    </React.Fragment>
    </div>

    )


}

export default Home;