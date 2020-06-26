import React, { Component } from 'react';
//import { Button, Form, Label, Input, Col, Row } from 'reactstrap';
import { Button, Row, Col, Label } from 'reactstrap';
import { Control, Errors, Form, actions } from 'react-redux-form';
import { Fade } from 'react-animation-components';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

function RenderComments({comments, addComment}) {
    if (comments) {
        return (
            <div className="col-12 col-md9 offset-md-1">
                <h4>Comments</h4>
                <ul className="list-unstyled comments-text" >
                    {comments.map((comment) => {
                        const options = { day: 'numeric', month: 'short', year: 'numeric' };
                        const date = new Date(comment.date).toLocaleDateString('en-Us', options);
                        return (
                            <ul class="list-unstyled">
                                <Fade in>
                                <li class="media">
                                    <img src="https://yt3.ggpht.com/a/AGF-l7_KVyuiY0btstoTirAqjnQyPwC6mB9y8CfwJg=s900-c-k-c0xffffffff-no-rj-mo" class="mr-3" alt="author" />
                                    <div class="media-body">
                                        <h5 class="mt-0">{comment.author}, {date}</h5>
                                        {comment.comment}
                                    </div>
                                </li> 
                                <li><br></br></li>
                                </Fade>
                            </ul>
                        )}
                    )}
                </ul>
            </div>
        );
    } else 
        return (
            <div></div>
        );
}

class Contact extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        // console.log('Current State is: ' + JSON.stringify(values));
        // alert('Thank you for your feedback! ' + JSON.stringify(values));
        this.props.addComment(values.firstname, values.message);
        this.props.resetFeedbackForm();
    }

    render() {
        return (
            <div className="container">
            <div name="contact" id="submitForm" className="row row-content" >
                <div className="col-12">
                    <h3>Send Us Your Feedback</h3>
                </div>
                <div className="col-12">
                    <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                        <Row className='form-group'>
                            <Label htmlFor="firstname" md={2}>First Name</Label>
                            <Col md={10}>
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
                            <Col md={10}>
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
                            <Col md={10}>
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
                            <Col md={10}>
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
                            <Col className='submitLeft' md={{ size: 10, offset: 2 }}>
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
                            <Col className='submitLeft' md={{ size: 10, offset: 2 }}>
                                <Button type="submit" color="warning">
                                    Send Feedback
                                    </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>

                <div className="col-12">
                    <RenderComments 
                        comments={this.props.comments} 
                        addComment={this.props.addComment}
                        /> 
                </div>

            </div>
            </div>
        );
    }
}

export default Contact;