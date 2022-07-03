import React, {Component} from 'react'
import dishes from "../../../data/dishes";
import MenuItem from "./MenuItem";
import {logDOM} from "@testing-library/react";
import MenuDetails from "./MenuDetails";
import comments from "../../../data/comments";
import {Button, Container, Modal, Row} from "react-bootstrap";

export default class Menu  extends Component{

    state = {
        dishes:dishes,
        selectedDish:null,
        comments:comments,
        show:false,
    }

    handleClose = ()=>{
        this.setState({
            show:false,
        })
    }

    ViewDetails =(item)=>{
        this.setState({
            selectedDish:item,
            show:!this.state.show,
        })
    }


    render() {
        document.title = "Menu";
        const dishesData = this.state.dishes;
        const dishItem = dishesData.map((item,idx)=>{
           return (
                      <MenuItem dish={item}  key={item.id} action={()=>this.ViewDetails(item)}/>
           )
        });

        let selectedDish = null;
        if(this.state.selectedDish!=null) {
            const comments = this.state.comments.filter(eachComment=>{
                return eachComment.dishId === this.state.selectedDish.id;
            })
            selectedDish =
                    <MenuDetails dish={this.state.selectedDish} comments={comments}/>
        }

        return (
            <div>
               <Container fluid={true}>
                   <Row lg={3} md={2} sm={1} xs={1}>

                       { dishItem }

                   </Row>

                   <Modal
                       size={"lg"}
                       show={this.state.show}
                       onHide={this.handleClose} >


                       <Modal.Header closeButton>
                           <Modal.Title>Modal title</Modal.Title>
                       </Modal.Header>
                       <Modal.Body>
                           {selectedDish}
                       </Modal.Body>
                       <Modal.Footer>
                           <Button variant="secondary" onClick={this.handleClose}>
                               Close
                           </Button>

                       </Modal.Footer>
                   </Modal>

               </Container>
            </div>
        );
    }
}


