import React, { Component } from 'react';
import { Button, Form, Label, Input, Col, Row } from 'reactstrap';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        alert('Thank you for your feedback! ' + JSON.stringify(values));
    }

    render() {
        return (
            <div id="submitForm" className="row row-content" >
                <div className="col-12">
                    <h3>Send Us Your Feedback</h3>
                </div>
                <div className="col-12 col-md-10 offset-md-1">
                    <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className='form-group'>
                            <Label htmlFor="firstname" md={2}>First Name</Label>
                            <Col md={4}>
                                <Input type="text" name="firstname" id="firstname" placeholder="First Name" />
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Label htmlFor="lastname" md={2}>Last Name</Label>
                            <Col md={4}>
                                <Input type="text" name="lastname" id="lastname" placeholder="Last Name" />
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Label htmlFor="telnum" md={2}>Tel.</Label>
                            <Col md={4}>
                                <Input type="tel" name="telnum" id="telnum" placeholder="x (xxx) xxx-xxxx" />
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Label htmlFor="email" md={2}>Email</Label>
                            <Col md={4}>
                                <Input type="email" name="email" id="email" placeholder="E-mail" />
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Col className='submitLeft' md={{ size: 6, offset: 2 }}>
                                <div className="form-check">
                                    <Input type="checkbox" />
                                    <Label check>
                                        <strong>May we contact you?</strong>
                                    </Label>
                                </div>
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Label htmlFor="message" md={2}>Your Feedback</Label>
                            <Col md={10}>
                                <Input type="textarea" name="message" id="message" placeholder="Message" />
                            </Col>
                        </Row>
                        <Row className='form-group'>
                            <Col className='submitLeft' md={{ size: 2, offset: 2 }}>
                                <Button type="submit" color="warning">
                                    Send Feedback
                                    </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Contact;