import React from "react";
import BikeCard from "../BikeCard/BikeCard";
import Badge from "react-bootstrap/Badge";


export const AvailableBikes = ({bikes}) => {
    return bikes
            ? (
                <div className='mb-5'>
                    <h4> &#128690; Available bicycles ({bikes.length})</h4>
                    {bikes.length
                        ? bikes.map( bike => <BikeCard key={bike._id} bike={bike}/>)
                        : <Badge variant="info">No any available bikes</Badge>
                    }
                </div>
            ) : null;
};