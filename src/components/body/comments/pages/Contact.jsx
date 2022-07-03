import React, {Component, Fragment} from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";


export default class  Contact extends Component{
   constructor() {
       super();
       this.state={
           fname:'',
           sname:'',
           mobile:'',
           email:'',
           message:'',
           consent:false,
       }
   }

   handleInput = e =>{
    const value = e.target.type==='checkbox'? e.target.checked:e.target.value;
    const name = e.target.name;
    this.setState({
        [name]:value
    })
   }

   submitInput = e =>{
       e.preventDefault();
       console.log(this.state);

   }

    render() {
        document.title = "Contact Us";
        return (
           <Fragment>
            <Container>
                <div>
                    <div className ="row vh-100 autolize">
                        <div className="col-md-6 align-self-center m-auto">
                            <h3 className="mb-5 bg-dark p-5 text-center text-white">Send us a message</h3>
                            <hr/>
                            <Form onSubmit={this.submitInput}>
                                <Row>
                                    <Form.Group as={Col} md="6" className="mb-3">
                                        <Form.Label>First Name</Form.Label>
                                        <Form.Control type="text" name="fname" value={this.state.fname} onChange={this.handleInput} placeholder="Peter" />
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" className="mb-3" >
                                        <Form.Label>Second Name</Form.Label>
                                        <Form.Control type="text" name="sname" value={this.state.sname} onChange={this.handleInput}  placeholder="Blay" />
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group as={Col} md="6" className="mb-3">
                                        <Form.Label>Phone</Form.Label>
                                        <Form.Control type="number" name="mobile" value={this.state.mobile} onChange={this.handleInput}  placeholder="024xxxxxxx" />
                                    </Form.Group>
                                    <Form.Group as={Col} md="6" className="mb-3">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control type="email" name="email"  value={this.state.email} onChange={this.handleInput}  placeholder="blay@gmail.com" />
                                    </Form.Group>
                                </Row>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control as="textarea" name="message" value={this.state.message} onChange={this.handleInput}  rows={3}  />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Check
                                        type="checkbox"
                                        label="May we contact you?"
                                        name="consent"
                                        onChange={this.handleInput}
                                        checked={this.state.consent}
                                    />
                                </Form.Group>
                                <Button type="submit">Send Message</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </Container>
           </Fragment>
        );
    }


}

