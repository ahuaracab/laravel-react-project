import React from 'react';
import {Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap';
import './Producto.css';
import FichaProducto from './FichaProducto';

class Producto extends React.Component{
    render(){
        return(
            <Col sm="4">
                <Card className="Card" body outline color="primary">
                    <CardImg src={this.props.imagen}/>
                    <CardBody>
                        <CardTitle>{this.props.titulo}</CardTitle>
                        <CardSubtitle><b>Precio: </b>{this.props.precio}</CardSubtitle>
                        <CardText>{this.props.descripcion}</CardText>
                        <FichaProducto props={this.props}/>
                    </CardBody>                
                </Card>
            </Col>            
        );
    }
}

export default Producto;