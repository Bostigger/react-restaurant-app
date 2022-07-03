import React, {Fragment} from "react";
import {Card, Col} from "react-bootstrap";

export default function MenuItem (props) {
    return (
        <div> <br/>
            <Fragment>
                <Col>
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={props.dish.image} />
                        <Card.Body>
                            <Card.Title style={{cursor:"pointer"}} onClick={props.action}>{props.dish.name}</Card.Title>
                            <Card.Text>
                                {props.dish.description}
                            </Card.Text>
                            <p>Price: GHS{props.dish.price}</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Fragment>


        </div>
    )
}