import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";


function Saved() {

  const [saved, setSaved] = useState([]);

  function deleteVin(id) {
    API.deleteVin(id)
      .then(res => res)
      .catch(err => console.log(err));
  }

  // get all the vins from the database and set them in the array 
  useEffect(() => {
    API.loadSavedVin()
      .then(res => {
        setSaved(res.data);
      })
      .catch(err => {
        console.log(err)
      })
  }, [saved])

  return (
    <Container fluid>
      <Row>
        <Col size="md-12 sm-12">
          <Jumbotron>
            <h1>Saved Car VIN numbers</h1>
          </Jumbotron>
        </Col>
        <Col size="md-12 sm-12" >
          <hr />
          <Row>
            {saved.length ? (

              saved.map(vin => (
                <Col size='sm-12' key={vin._id}>
                  <div className="mb-4 border  p-3 rounded shadow ">
                    <DeleteBtn onClick={() => deleteVin(vin._id)} />
                    <Link to={"/api/vin" + vin.id} />
                    <strong className="m-4">
                      VIN: {vin.vin}
                    </strong>
                    <p className="mt-3">
                      MAKE: {vin.make}
                    </p>
                    <p className="mt-3" >
                      MODEL: {vin.model}
                    </p>
                    <p className="mt-3" >
                      MODEL YEAR: {vin.modelYear}
                    </p>
                    <p className="mt-3" >
                      ENGINE MODEL: {vin.engineModel}
                    </p>
                    <p className="mt-3" >
                      ENGINE HP: {vin.engineHp}
                    </p>
                    <p className="mt-3" >
                      ENGINE CYCLINERS: {vin.engineCylinders}
                    </p>
                    <hr />
                  </div>
                </Col>
              ))

            ) : (
                <h3>No Saved VIN to Display</h3>
              )}

          </Row>
        </Col>
      </Row>
    </Container>
  )
}


export default Saved;