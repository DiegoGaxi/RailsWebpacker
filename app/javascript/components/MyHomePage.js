import React, { useState, useEffect } from "react"
import { Button, Col, Row, Container } from 'react-bootstrap';
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import RestaurantDetails from "./RestaurantDetails";

function MyHomePage({ }) {
  const [restaurants, setRestaurants] = useState([]);

  const detalleRestaurante = (e, id) => {
    e.preventDefault()
    fetch('/restaurants/' + id, {
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
    <Container style={bodyStyle}>

      <Row className={"mt-5"}>
        <Col md={12}>
          <h1 style={titulo}>
            Restaurantes
          </h1>
        </Col>
        <Col md={12} className={"mt-5"}>
          <h2 style={subTituto}>
            Su comida favorita en la palma de su mano
          </h2>
        </Col>
      </Row>

      <Row className={"mt-5"} style={divPrincipal}>
        {restaurants.map((res) => (
          <Col xl={4} lg={6} md={12} sm={12} xs={12} style={divCol} key={res.id}>
            <div style={divCard}>
              <div style={divImg} />
              <div style={divNombre}>
                <b>
                  {res.nombre}
                </b>
              </div>

              <div style={divDescripcion}>
                <i>
                  {res.descripcion}
                </i>
              </div>


              {/* <BrowserRouter> */}
              {/* <Link to={"/restaurants/detail"} > */}
              <Button
                style={buttonVerMas}
                onClick={(e) => { detalleRestaurante(e, res.id) }}
                type="submit"
                variant={"danger"}>
                VER MÁS...
                </Button>
              {/* <Route path="/restaurants" component={RestaurantDetails} /> */}
              {/* </Link> */}
              {/* <Switch>
                  <Route path="/restaurants/detail" component={RestaurantDetails} />
                </Switch> */}
              {/* </BrowserRouter> */}
            </div>
          </Col>
        ))}
      </Row>



      <div className="mt-5" style={divfooter}>
        <div style={footer}>
          <h5>
            <b>
              <a href={"https://www.linkedin.com/in/diegogax/"}>LinkedIN </a>
            </b>
          </h5>
          <h5>
            <b>
              Created By Diego Gaxiola
            </b>
          </h5>
        </div>
      </div >
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

const divPrincipal = {
  borderColor: 'black',
  color: 'black',
};

const titulo = {
  fontSize: '60px',
  color: 'black',
};

const subTituto = {
  fontSize: '36px',
  color: 'black',
};

const divDescripcion = {
  fontSize: '18px',
  textAlignLast: 'left',
  textAlign: 'left',
  color: 'black',
};

const divNombre = {
  fontSize: '20px',
  justifyContent: 'left',
  color: 'black',
  textAlign: 'left',
};

const divCol = {
  minWidth: '300px',
};

const divImg = {
  borderColor: '#DDDDDD',
  backgroundColor: 'transparent',
  width: '250px',
  height: '250px',
  border: '1px solid #eaeaea',
  backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/en/8/80/Logo_of_RSS.png")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  color: 'black',
};

const buttonVerMas = {
  width: '120px',
  height: '40px',
  border: 'transparent ',
  color: '#FF9002',
  fontWeight: 'bold',
  borderTop: 'none ',
  borderLeft: 'none ',
  borderRight: 'none ',
  borderBottom: 'none',
  backgroundColor: 'transparent ',
  borderRadius: '0px ',
  float: 'right'
};

const divCard = {
  marginTop: '1rem',
  margin: '3rem',
  flexBasis: '45%',
  textAlign: '-webkit-center',
  color: 'inherit',
  textDecoration: 'none',
  transition: 'color 0.15s ease, border-color 0.15s ease'
};

const divfooter = {
  marginTop: '1rem',
  flexBasis: '45%',
  padding: '1.5rem',
  textAlign: '-webkit-center',
  color: 'inherit',
  textDecoration: 'none',
};

const footer = {
  textSize: '40px',
};

export default MyHomePage
