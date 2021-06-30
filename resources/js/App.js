import React from "react";
import Producto from "./Componentes/Producto";
import Navegacion from "./Componentes/Nagevacion";
import "./App.css";
import { Container, Row } from "reactstrap";
import listaProductos from "./listaProductos.json";

console.log(listaProductos);
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      listaProductos: listaProductos.listaProductos,
      listaProductosDB: []
    };
  }

  componentDidMount() {
      fetch('/lista_productos').then(response => {
            return response.json();
        }).then(listaProductosDB => {
            this.setState({listaProductosDB})
        }).catch(function() {
            alert("Can't connect to backend try latter");
        });
  }

  render() {
    const arregloComponentes = this.state.listaProductosDB.map(
      (productosDB, i) => {
        return (
          <Producto
            key = {i}
            titulo={productosDB.descripcion}
            imagen={productosDB.imagen}
            descripcion={productosDB.descripcion_larga}
            precio={productosDB.precio}
            stock={productosDB.stock}
          />
        );
      }
    );
    return (
      <Container>
        <Navegacion titulo="Mi primer sitio de compras en React"/>
        <Row>
          {arregloComponentes}
        </Row>
      </Container>
    );
  }
}

export default App;