import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponent extends Component {
handleEdit = (e) => {
  e.preventDefault();
  const newNombre = this.getNombre.value;
  const newProfesion = this.getProfesion.value;
  const newPuesto = this.getPuesto.value;
  const newTecnologia = this.getTecnologia.value;
  const data = {
    newNombre,
    newProfesion,
    newPuesto,
    newTecnologia,
  }
  this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
}
render() {
return (
<div>

<div className="table table-striped table align-middle bordered hover" >
  <thead>
    <tr>
      
      <th>Apellido y Nombre</th>
      <th>Profesion</th>
      <th>Puesto</th>
      <th>Tecnologia</th>

    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>{this.props.post.nombre}</td>
      <td>{this.props.post.profesion}</td>
      <td>{this.props.post.puesto}</td>
      <td>{this.props.post.tecnologia}</td>
     
    </tr>
       
  </tbody>
</div>
  <form onSubmit={this.handleEdit}>
    <label htmlFor="Nombre"></label>
    <input required type="text" ref={(input) => this.getNombre = input}
    defaultValue={this.props.post.nombre} placeholder="Ingrese su nombre y apellido" /><br /><br />

    <label htmlFor="Profesion"></label>
    <input required type="text" ref={(input) => this.getProfesion = input}
    defaultValue={this.props.post.profesion} placeholder="Ingrese su Profesion" /><br /><br />
    
    <label htmlFor="Puesto"></label>
    <input required type="text" ref={(input) => this.getPuesto = input}
    defaultValue={this.props.post.puesto} placeholder="Ingrese puesto" /><br /><br />
    
    <label htmlFor="Tecnologia"></label>
    <input required type="text" ref={(input) => this.getTecnologia = input}
    defaultValue={this.props.post.tecnologia} placeholder="Tecnologia" /><br /><br />
    
    <button className="btn btn-primary mt-3">Modificar</button>
  </form>
</div>
);
}
}
export default connect()(EditComponent);