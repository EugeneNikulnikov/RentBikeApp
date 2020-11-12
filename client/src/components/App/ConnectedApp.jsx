import React, {useEffect} from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {connect}  from "react-redux";

import '../../style/main.css'
import {CPreloader} from "../Preloader/Preloader";
import {actionGetBikes} from "../../thunk/thunk";
import {store} from '../../store/store'
import {AvailableBikes} from "../AvailableBikes/AvailableBike";
import {RentedBikes} from "../RentedBikes/RentedBikes";
import {CBikeForm} from "../CreateBike/CreateBike";



export const App = ({bikes}) => {
    useEffect(()=>{
        store.dispatch(actionGetBikes());
    },[]);

    let availableBikes = [];
    let rentedBikes = [];
    if(bikes && bikes.length){
        availableBikes = bikes.filter(bike => bike.rented === false);
        rentedBikes = bikes.filter(bike => bike.rented === true);
    }

    return (
        <Container className="p-md-4 p-sm-1 sContainer mw-100" style={{backgroundColor: "#eee"}}>
            <Row className='mainContent p-md-1 p-sm-5'>
                <Col sm={8} className='m-0 mb-4 pt-3'>
                    <h1>Awesome Bike Rental</h1>
                </Col>
                <Col sm={8} className='m-0'>
                    <Row className='m-3 justify-content-center'>
                        <Col sm={2}>
                            <CPreloader/>
                        </Col>
                    </Row>
                    <CBikeForm/>
                    <RentedBikes bikes={rentedBikes}/>
                    <AvailableBikes bikes={availableBikes}/>
                </Col>
            </Row>
        </Container>
    );
};


const MS2P = state => {
    return{
        bikes: state && state.bikes
    }
};

export const CApp = connect(MS2P)(App);
