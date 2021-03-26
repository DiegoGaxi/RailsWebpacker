import React, { useState, useEffect } from "react"
import { Button, Col, Row, Container } from 'react-bootstrap';


function RestaurantDetails() {

    useEffect(() => {

    }, []);

    return (
        <Container style={bodyStyle}>
            Prueba
        </Container >
    );
}

const bodyStyle = {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    alignItems: 'center ',
    justifyContent: 'center ',
    textAlignLast: 'center',
    border: '3px solid gray',
    // backgroundImage: 'url("https://png.pngtree.com/thumb_back/fw800/back_our/20190620/ourmid/pngtree-vector-cuisine-gourmet-background-image_147527.jpg")',
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
};

export default RestaurantDetails
