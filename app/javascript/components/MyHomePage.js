import React, { useState, useEffect } from "react"
import { Button } from 'react-bootstrap';

function MyHomePage() {
  const [restaurants, setRestaurants] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault()
    fetch('/restaurants/1', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
      .then(respuesta =>
        respuesta.json()
      )
      .then(result => {
        debugger
      })
      .catch(error => {
        debugger
      })
  }

  const getAllRestaurants = () => {
    fetch('/restaurants', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
      .then(respuesta =>
        respuesta.json()
      )
      .then(result => {
        setRestaurants(result)
      })
      .catch(error => {
        debugger
      })
  }

  useEffect(() => {
    getAllRestaurants();
  }, []);

  return (
    <div style={bodyStyle}>
      <h1 style={titulo}>
        Titular
      </h1>
      <h2 style={subTituto}>
        Texto de descripcion o introducción
      </h2>

      <div style={divPrincipal} >
        {restaurants.map((res) => (
          <div key={res.id} style={divCard} >
            <div style={divImg} />
            <div >
              <b>
                {res.descripcion}
              </b>
            </div>
            <div >
              {res.descripcion}
            </div>
            <form onSubmit={handleSubmit}>
              {/* <button style={buttonVerMas} type="submit" >Ver Mas...</button> */}
              <Button type="submit" variant={"danger"}>Ver Mas...</Button>
            </form>
          </div>
        ))}
      </div>

      <div style={footer}>

      </div >
    </div >
  );
}

const bodyStyle = {
  backgroundColor: 'white',
  width: '100%',
  height: '100%',
  display: 'grid ',
  alignItems: 'center ',
  justifyContent: 'center ',
  textAlignLast: 'center',
  border: '3px solid gray',
};

const divPrincipal = {
  borderColor: 'black transparent',
  color: 'black',
};

const titulo = {
  fontSize: '60px',
  color: 'black',
};

const subTituto = {
  fontSize: '40px',
  color: 'black',
};

const divImg = {
  borderColor: 'gray',
  width: '200px',
  height: '200px',
  border: '1px solid #eaeaea',
  borderRadius: '10px',
  color: 'black',
};

const buttonVerMas = {
  width: '100px',
  height: '40px',
  border: 'transparent ',
  color: 'orange',
  borderTop: 'none ',
  borderLeft: 'none ',
  borderRight: 'none ',
  borderBottom: 'none',
  backgroundColor: 'transparent ',
  borderRadius: '0px ',
};

const divCard = {
  marginTop: '1rem',
  flexBasis: '45%',
  padding: '1.5rem',
  textAlign: '-webkit-center',
  color: 'inherit',
  textDecoration: 'none',
  transition: 'color 0.15s ease, border-color 0.15s ease'
};

const footer = {
  marginTop: '1rem',
  flexBasis: '45%',
  padding: '1.5rem',
  textAlign: '-webkit-center',
  color: 'inherit',
  textDecoration: 'none',
  border: '1px solid gray',
  borderRadius: '10px',
  transition: 'color 0.15s ease, border-color 0.15s ease'
};

export default MyHomePage
