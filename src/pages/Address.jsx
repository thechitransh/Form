import React, { useContext, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Store } from '../context/Store';

function Address({ setValidation }) {
  const {
    addressLine1,
    setAddressLine1,
    addressLine2,
    setAddressLine2,
    city,
    setCity,
    state,
    setState,
    zipcode,
    setZipcode,
    addressLine1E,
    setAddressLine1E,
    addressLine2E,
    setAddressLine2E,
    cityE,
    setCityE,
    stateE,
    setStateE,
    zipcodeE,
    setZipcodeE,
  } = useContext(Store);

  const [touched, setTouched] = useState({
    addressLine1: false,
    addressLine2: false,
    city: false,
    state: false,
    zipcode: false,
  });

  useEffect(() => {
    if (touched.addressLine1) {
      setAddressLine1E(addressLine1.trim().length === 0);
    }
    if (touched.addressLine2) {
      setAddressLine2E(addressLine2.trim().length === 0);
    }
    if (touched.city) {
      setCityE(city.trim().length === 0);
    }
    if (touched.state) {
      setStateE(state.trim().length === 0);
    }
    if (touched.zipcode) {
      setZipcodeE(zipcode.trim().length === 0);
    }
  }, [
    addressLine1,
    addressLine2,
    city,
    state,
    zipcode,
    setAddressLine1E,
    setAddressLine2E,
    setCityE,
    setStateE,
    setZipcodeE,
    touched,
  ]);

  const handleAddressLine1Change = (e) => {
    setAddressLine1(e.target.value);
    setTouched((prev) => ({ ...prev, addressLine1: true }));
  };

  const handleAddressLine2Change = (e) => {
    setAddressLine2(e.target.value);
    setTouched((prev) => ({ ...prev, addressLine2: true }));
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
    setTouched((prev) => ({ ...prev, city: true }));
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
    setTouched((prev) => ({ ...prev, state: true }));
  };

  const handleZipcodeChange = (e) => {
    setZipcode(e.target.value);
    setTouched((prev) => ({ ...prev, zipcode: true }));
  };

  const validateForm = () => {
    const isValidAddressLine1 = addressLine1.trim().length !== 0;
    const isValidAddressLine2 = addressLine2.trim().length !== 0;
    const isValidCity = city.trim().length !== 0;
    const isValidState = state.trim().length !== 0;
    const isValidZipcode = zipcode.trim().length !== 0;

    setAddressLine1E(!isValidAddressLine1);
    setAddressLine2E(!isValidAddressLine2);
    setCityE(!isValidCity);
    setStateE(!isValidState);
    setZipcodeE(!isValidZipcode);

    return (
      isValidAddressLine1 &&
      isValidAddressLine2 &&
      isValidCity &&
      isValidState &&
      isValidZipcode
    );
  };

  useEffect(() => {
    setValidation(() => validateForm);
  }, [setValidation, validateForm]);

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        height: '60vh',
        '& > :not(style)': { m: 5, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="addressLine1"
        label="Address Line 1"
        error={addressLine1E}
        variant="standard"
        value={addressLine1}
        onChange={handleAddressLine1Change}
        helperText={addressLine1E ? 'Address Line 1 is required' : ''}
      />
      <TextField
        id="addressLine2"
        label="Address Line 2"
        error={addressLine2E}
        variant="standard"
        value={addressLine2}
        onChange={handleAddressLine2Change}
        helperText={addressLine2E ? 'Address Line 2 is required' : ''}
      />
      <TextField
        id="city"
        label="City"
        error={cityE}
        variant="standard"
        value={city}
        onChange={handleCityChange}
        helperText={cityE ? 'City is required' : ''}
      />
      <TextField
        id="state"
        label="State"
        error={stateE}
        variant="standard"
        value={state}
        onChange={handleStateChange}
        helperText={stateE ? 'State is required' : ''}
      />
      <TextField
        id="zipcode"
        label="Zipcode"
        error={zipcodeE}
        variant="standard"
        value={zipcode}
        onChange={handleZipcodeChange}
        helperText={zipcodeE ? 'Zipcode is required' : ''}
      />
    </Box>
  );
}

export default Address;
