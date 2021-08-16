import React, { Component } from 'react';

import {connect} from 'react-redux';


class Post extends Component {
  render() {
  return (
    <div>

<div className="container">
  <div className="row">
  <div className="table table-striped table bordered hover" >
  <thead>
    <tr>
      
      <th>Apellido y Nombre</th>
      <th>Profesion</th>
      <th>Puesto</th>
      <th>Tecnologia</th>
      <td>Editar</td>

    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{this.props.post.nombre}</td>
      <td>{this.props.post.profesion}</td>
      <td>{this.props.post.puesto}</td>
      <td>{this.props.post.tecnologia}</td>
      <td>   <button className="btn btn-warning mr-5"
       onClick={()=>this.props.dispatch({type:'EDIT_POST',id:this.props.post.id})}>
       Modificar</button>
      <button class="btn btn-danger"
      onClick={()=>this.props.dispatch({type:'DELETE_POST',id:this.props.post.id})}>
      Borrar</button></td>
     
    </tr>
       
  </tbody>
</div>
  </div>
</div>


            
    
    </div>
  );
 }
}
export default connect()(Post);