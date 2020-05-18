import React, { Component } from 'react';
//import { Button, Form, Label, Input, Col, Row } from 'reactstrap';
import { Button, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Thank you for your feedback! ' + JSON.stringify(values));
    }

    render() {
        return (
            <div name="contact" id="submitForm" className="row row-content" >
                <div className="col-12">
                    <h3>Send Us Your Feedback</h3>
                </div>
                <div className="col-12 col-md-10 offset-md-1">
                    <LocalForm model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className='form-group'>
                            <Label htmlFor="firstname" md={2}>First Name</Label>
                            <Col md={4}>
                                <Control.text model=".firstname" name="firstname" 
                                id="firstname" 
                                className="form-control"
                                placeholder="First Name" 
                                />
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Label htmlFor="lastname" md={2}>Last Name</Label>
                            <Col md={4}>
                                <Control.text model=".lastname" 
                                name="lastname" 
                                id="lastname" 
                                className="form-control"
                                placeholder="Last Name" />
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Label htmlFor="telnum" md={2}>Tel.</Label>
                            <Col md={4}>
                                <Control.text model=".telnum" 
                                name="telnum" 
                                id="telnum" 
                                className="form-control"
                                placeholder="x (xxx) xxx-xxxx" />
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Label htmlFor="email" md={2}>Email</Label>
                            <Col md={4}>
                                <Control.text model=".email" 
                                name="email" 
                                id="email"
                                className="form-control" 
                                placeholder="E-mail" />
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Col className='submitLeft' md={{ size: 6, offset: 2 }}>
                                <div className="form-check">
                                    <Label check>
                                        <Control.checkbox model=".agree" 
                                        className="form-check-input" 
                                        /> {' '}
                                        <strong>May we contact you?</strong>
                                    </Label>
                                </div>
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Label htmlFor="message" md={2}>Your Feedback</Label>
                            <Col md={10}>
                                <Control.textarea 
                                    model=".message" 
                                    name="message" 
                                    id="message" 
                                    className="form-control"
                                    placeholder="Message"
                                    />
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Col className='submitLeft' md={{ size: 2, offset: 2 }}>
                                <Button type="submit" color="warning">
                                    Send Feedback
                                    </Button>
                            </Col>
                        </Row>
                    </LocalForm>
                </div>
            </div>
        );
    }
}

export default Contact;