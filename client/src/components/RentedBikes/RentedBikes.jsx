import React from "react";
import BikeCard from "../BikeCard/BikeCard";
import Badge from "react-bootstrap/Badge";


export const RentedBikes = ({bikes}) => {
    let totalPrice = 0;
    bikes.map(bike => totalPrice += bike.price);
    return bikes
            ? (
                <div className='mb-5'>
                    <h4> &#x1F929; Your rent (Total: ${totalPrice})</h4>
                    {bikes.length
                        ? bikes.map( bike => <BikeCard key={bike._id} bike={bike}/>)
                        : <Badge variant="info">No rented bikes yet</Badge>
                    }
                </div>
            ) : null
};
