import React, { Component } from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";

class PostForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const nombre = this.getNombre.value;
    const profesion = this.getProfesion.value;
    const puesto = this.getPuesto.value;
    const tecnologia = this.getTecnologia.value;
    const data = {
      id: new Date(),
      nombre,
      profesion,
      puesto,
      tecnologia,
      editing: false,
    };
    console.log();
    this.props.dispatch({
      type: "ADD_POST",
      data,
    });
    this.getNombre.value = "";
    this.getProfesion.value = "";
    this.getPuesto.value = "";
    this.getTecnologia.value = "";
  };
  render() {
    return (
      <div className="container">
        <h1 className="display-5 text-center">Agregar Empleado</h1>

        <form className="form-control" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col">
              <h5>Nombre y Apellido</h5>
              <input className="col-md-10 mb-3"
                required
                type="text"
                ref={(input) => (this.getNombre = input)}
                placeholder="Nombre y Apellido"
              />
              <br />

              <h5>Profesión</h5>
              <input className="col-md-10 mb-3"
                required
                type="text"
                ref={(input) => (this.getProfesion = input)}
                placeholder="Profesion"
                size="lg"
              />
              <br />
            </div>

            <div className="col">
              
              <h5>Puesto</h5>
              <input className="col-md-10 mb-3"
                required
                type="text"
                ref={(input) => (this.getPuesto = input)}
                placeholder="Puesto"
              />
              <br />
              <h5>Tecnologia</h5>
              <input className="col-md-10 mb-3"
                required
                type="text"
                ref={(input) => (this.getTecnologia = input)}
                placeholder="Tecnologia"
              />
              <br />
            </div>
          </div>
          <button className="btn btn-primary mt-3">Agregar</button>
        </form>


   </div>
    );
  }
}
export default connect()(PostForm);
