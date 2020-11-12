import React from "react";
import Col from "react-bootstrap/Col";
import '../../style/main.css'
import Button from "react-bootstrap/Button";
import {actionDeleteBike, actionUpdate} from "../../thunk/thunk";
import {connect}  from "react-redux";

const BikeCard = ({bike, deleteBike, updateBike}) => {
    return <Col className='bikeCard' sm={12}>
                <p className='bikeInfoSize'>
                    {`${bike.name} / ${bike.type} / $${bike.price}`}
                </p>
                {bike.rented
                    ? <Button variant='danger' className='pr-4 pl-4'
                              onClick={() => updateBike(bike._id)}>
                            Cancel rent</Button>
                    : (<div>
                            <Button  className=' mr-3 pr-4 pl-4'
                            onClick={() => updateBike(bike._id)}>
                                Rent</Button>
                            <Button variant='danger' className='mr-3  pr-4 pl-4'
                            onClick={() => deleteBike(bike._id)}>
                                Delete</Button>
                        </div>)

                }
            </Col>
};

const MD2P = {
    deleteBike: actionDeleteBike,
    updateBike: actionUpdate,
};

export default connect(null, MD2P)(BikeCard)