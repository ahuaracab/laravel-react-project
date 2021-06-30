import React from "react";
import {
  Popover,
  PopoverBody,
  PopoverHeader,
  Table,
  Badge,
  Button,
} from "reactstrap";
import listaCarrito from '../listaCarrito.json'

class Carro extends React.Component {
  constructor() {
    super();
    this.state = {
      popoverOpen: false,
      listaCarrito: listaCarrito.listaCarrito
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState((prevState) => ({
      popoverOpen: !prevState.popoverOpen,
    }));
  }

  montoTotal(){
      let total = 0;
      this.state.listaCarrito.map(
          (listaCarrito) => {
              total += listaCarrito.precio; 
          }
      )

      return(
          total
      );
  }

  render() {

    const arregloCarrito = this.state.listaCarrito.map(
        (listaCarrito, i) => {
            return (
                <tr>
                    <td>{(i+=1)}</td>
                    <td>{listaCarrito.titulo}</td>
                    <td>{listaCarrito.precio}</td>
                </tr>
            )
        }
    )

    return (
      <div>
        <Button id="Popover1" color="info">
          <span className="material-icons">shopping_cart</span>
          <Badge color="secondary" id="BagdeId">{listaCarrito.length}</Badge>
        </Button>
        <Popover
          target="Popover1"
          placement="bottom"
          isOpen={this.state.popoverOpen}
          toggle={this.toggle}
        >
          <PopoverHeader>Listado de compras</PopoverHeader>
          <PopoverBody>
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Producto</th>
                  <th>Precio</th>
                </tr>
              </thead>
              <tbody>
                {arregloCarrito}
              </tbody>
              <tfoot>
                <td>Total: </td>
                <td></td>
                <td>{this.montoTotal()} CLP</td>
              </tfoot>
            </Table>
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}

export default Carro;