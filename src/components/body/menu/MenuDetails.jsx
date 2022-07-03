import React from 'react'
import {Card} from "react-bootstrap";
import AllComments from "./AllComments";

export default function MenuDetails(props) {

    return(
        <div> <br/>
            <Card style={{ width: '48rem' }}>
                <Card.Img variant="top" src={props.dish.image} />
                <Card.Body>
                    <Card.Title>{props.dish.name}</Card.Title>
                    <Card.Text>
                        {props.dish.description}
                    </Card.Text>
                    <p><b>Price: GHS{props.dish.price}</b></p>
                    <p><b>Category: {props.dish.category}</b></p>
                    <p><b>Label: {props.dish.label}</b></p>
                    <hr/>

                </Card.Body>
                <h5>What Customers say</h5>
                <hr/>
                <AllComments comments={props.comments} />
            </Card>
        </div>
    )
}