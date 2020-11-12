import React from "react";
import Col from "react-bootstrap/Col";
import {useForm} from "react-hook-form";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import {actionCreate} from "../../thunk/thunk";
import {connect} from "react-redux";
import Badge from "react-bootstrap/Badge";



const BikeForm = ({CreateBike}) => {
    const {register, handleSubmit, errors} = useForm();

    const onSubmit = data => {
        CreateBike(data);
    };
    return(
        <div className='mb-5'>
            <h4>&#x1f911; Create new rent</h4>
            <Col className='bikeInput p-2' sm={12}>
                <Form className='m-0' onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group as={Row}>
                        <Col lg={4}>
                            <label htmlFor='name'>Bike name</label>
                            <Form.Control
                                id='name'
                                name='name'
                                ref={register({
                                required: "Required",
                                pattern: {
                                    value: /[0-9a-zA-Z]$/,
                                    message: "Invalid name",
                                }
                            })} />
                            <Badge className='mt-1' variant="danger">
                                {errors.name && errors.name.message}
                            </Badge>{' '}
                        </Col>
                        <Col lg={4}>
                            <label htmlFor='type'>Bike type</label>
                            <Form.Control
                                custom
                                as="select"
                                name="type"
                                id="type"
                                ref={register({
                                    required: "Required",
                                    pattern: {
                                        value: /.*\S.*/,
                                        message: "Choose bike type",
                                    }
                                })}>
                                <option defaultValue value="">Choose</option>
                                <option value="road">Road</option>
                                <option value="mountain">Mountain</option>
                                <option value="hybrid">Hybrid</option>
                                <option value="electric">Electric</option>
                            </Form.Control>
                            <Badge className='mt-1' variant="danger">
                                {errors.type && errors.type.message}
                            </Badge>{' '}
                        </Col>
                        <Col lg={2}>
                            <label htmlFor="price">Rent Price</label>
                            <Form.Control
                                id='price'
                                type='number'
                                name='price'
                                ref={register({
                                required: "Required",
                                pattern: {
                                    value: /.*\S.*/,
                                    message: "Rent price",
                                }
                            })}/>
                            <Badge className='mt-1' variant="danger">
                                {errors.price && errors.price.message}
                            </Badge>{' '}
                        </Col>
                        <Col className='pt-4' lg={2}>
                            <Button style={{marginTop: '7px'}} variant='info' type="submit">Submit rent</Button>
                        </Col>
                    </Form.Group>
                </Form>
            </Col>
        </div>
    )
};

const MD2P = {
    CreateBike: actionCreate,
};

export const CBikeForm = connect(null, MD2P)(BikeForm);