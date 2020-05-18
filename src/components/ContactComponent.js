import React, { Component } from 'react';
//import { Button, Form, Label, Input, Col, Row } from 'reactstrap';
import { Button, Row, Col, Label } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

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
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }} 
                                />
                                 <Errors
                                    className="text-danger"
                                    model=".firstname"
                                    show="touched"
                                    messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
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
                                placeholder="Last Name" 
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".lastname"
                                    show="touched"
                                    messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                     />
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Label htmlFor="telnum" md={2}>Tel.</Label>
                            <Col md={4}>
                                <Control.text model=".telnum" 
                                name="telnum" 
                                id="telnum" 
                                className="form-control"
                                placeholder="x (xxx) xxx-xxxx" 
                                validators={{
                                    required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                                }}/>
                                <Errors
                                    className="text-danger"
                                    model=".telnum"
                                    show="touched"
                                    messages={{
                                            required: 'Required ',
                                            minLength: 'Must be greater than 2 numbers',
                                            maxLength: 'Must be 15 numbers or less',
                                            isNumber: 'Must be a number'
                                        }}
                                     />
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Label htmlFor="email" md={2}>Email</Label>
                            <Col md={4}>
                                <Control.text model=".email" 
                                name="email" 
                                id="email"
                                className="form-control" 
                                placeholder="E-mail" 
                                validators={{
                                    required, validEmail
                                }}/>
                                <Errors
                                    className="text-danger"
                                    model=".email"
                                    show="touched"
                                    messages={{
                                            required: 'Required ',
                                            validEmail: 'Invalid Email Address'
                                        }}
                                     />
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