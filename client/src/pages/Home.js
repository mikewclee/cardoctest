import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import Hero from "../components/Hero/Hero";
import porsche from "../components/assets/porsche.jpg";
import logo from "../components/assets/cardoc.png";
import Search from "../components/Search/Search";
import Button from "../components/Button";
import { Container, Row, Col } from "../components/Grid";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";
import SearchResults from "../components/SearchResults";

export default function Home() {
  const { userData } = useContext(UserContext);
  const [vin, setVin] = useState([]);
  const [formObject, setFormObject] = useState({});

  // useEffect(() => {
  //   loadVin()
  // }, [])

  function loadVin() {
    API.searchVin()
      .then(res => setVin(res.data.Results[0]))
      .catch(err => console.log(err));
  };

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value })
  };
  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.search) {
      API.searchVin(formObject.search)
        .then(res => {
          // console.log(res.data.Results[0].Make)
          console.log(res.data.Results)
          setVin(res.data.Results)
        })
        .catch(err => {
          console.log(err);
        })
    }
  };

  //save vin to dbase
  function saveVinSelection(vin) {
    // event.preventDefault();
    // savebook to dbase
    console.log("OnClick saveVinSelection--results: " + vin[0].VIN);
    API.saveVin({
      vin: vin[0].VIN,
      make: vin[0].Make,
      model: vin[0].Model,
      modelYear: vin[0].ModelYear,
      engineModel: vin[0].EngineModel,
      engineHp: vin[0].EngineHP,
      engineCylinders: vin[0].EngineCylinders,
      fuelInjection: vin[0].FuelInjectionType,
    })
      // .then(res => loadVin())
      .then(res => console.log('Saved to dbase'))
      .catch(err => console.log(err));
  };


  function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString("US"));

    setInterval(() => setTime(new Date().toLocaleTimeString("US")), 1000);

    return <p>Current Time: {time} </p>

  }
  return (
    <div className="page">
      {userData.user ? (
        <h1>Welcome {userData.user.displayName}
          <Clock /> </h1>
      ) : (
          <>
            <h4>Welcome to CarDoc! Please
          <Link to="/login"> Log in</Link></h4>
            {/* <Clock /> */}
          </>
        )}
      <Hero backgroundImage={porsche}>
        <img className="cardoclogo" src={logo} alt={"logo"} style={{ height: 120, flex: 1, width: undefined, padding: 0 }} />
        <h2 className="hometitle">For your auto parts and modifications needs.</h2>
      </Hero>
      <Container>

        <Row>
          <Col size="md-12">
            <form>
              <Container>
                <Row>
                  <Col size="xs-9 sm-10">
                    <Input style={{ height: 50, width: "60%", borderColor: 'grey', borderWidth: 1, borderRadius: 10, margin: 10, fontSize: 15 }}
                      onChange={handleInputChange}
                      name="search"
                      placeholder="  Enter Car VIN  "
                    />
                  </Col>
                  <Col size="xs-3 sm-9">
                    <button style={{ fontsize: 10, padding: 10, borderradius: 5, borderWidth: 1, margin: 5, backgroundColor: 'grey', }}
                      disabled={!(formObject.search)}
                      onClick={handleFormSubmit}
                      type="light"
                    >
                      VIN Search
                  </button>
                  </Col>
                </Row>
              </Container>
            </form>
          </Col>
        </Row>

        <Row>
          <Col size="xs-12 sm-12">
            {vin.length ? (
              <div className="vinReturn">
                <h2>Car VIN Details </h2>
                <Button onClick={() => saveVinSelection(vin)} variant="outline-success" className='ml-3' >Save</Button>
                <div> VIN: {vin[0].VIN} </div>
                <div> Make: {vin[0].Make} </div>
                <div> Model: {vin[0].Model} </div>
                <div> Model Year: {vin[0].ModelYear} </div>
                <div> Engine HP: {vin[0].EngineHP} </div>
                <div> Engine Cylinders: {vin[0].EngineCylinders} </div>
                <div> Displacement CC: {vin[0].DisplacementCC} </div>
                <div> Fuel Injection Type: {vin[0].FuelInjectionType} </div>
                <div> Drive Type: {vin[0].DriveType} </div>
                <div> Doors: {vin[0].Doors} </div>
                <div> Trim: {vin[0].Trim} </div>
              </div>
            ) : (
                <h3>No Results to Display</h3>
              )}
          </Col>

        </Row>
      </Container>


    </div>
  );
}