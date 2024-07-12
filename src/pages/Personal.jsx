import React, { useContext, useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Store } from '../context/Store';

function Personal({ setValidation }) {
  const {
    name,
    Setname,
    email,
    Setemail,
    phone,
    Setphone,
    nameE,
    setnameE,
    emailE,
    setemailE,
    phoneE,
    setphoneE,
  } = useContext(Store);

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    phone: false,
  });

  useEffect(() => {
    if (touched.name) {
      setnameE(name.trim().length === 0);
    }
    if (touched.email) {
      setemailE(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
    }
    if (touched.phone) {
      setphoneE(!/^\d{10}$/.test(phone));
    }
  }, [name, email, phone, setnameE, setemailE, setphoneE, touched]);

  const handleNameChange = (e) => {
    Setname(e.target.value);
    setTouched((prev) => ({ ...prev, name: true }));
  };

  const handleEmailChange = (e) => {
    Setemail(e.target.value);
    setTouched((prev) => ({ ...prev, email: true }));
  };

  const handlePhoneChange = (e) => {
    Setphone(e.target.value);
    setTouched((prev) => ({ ...prev, phone: true }));
  };

  const validateForm = () => {
    const isValidName = name.trim().length !== 0;
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPhone = /^\d{10}$/.test(phone);

    setnameE(!isValidName);
    setemailE(!isValidEmail);
    setphoneE(!isValidPhone);

    return isValidName && isValidEmail && isValidPhone;
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
        id="Name"
        label="Name"
        error={nameE}
        variant="standard"
        value={name}
        onChange={handleNameChange}
        helperText={nameE ? 'Name is required' : ''}
      />
      <TextField
        id="Email"
        label="Email"
        error={emailE}
        type="email"
        variant="standard"
        value={email}
        onChange={handleEmailChange}
        helperText={emailE ? 'Enter a valid email' : ''}
      />
      <TextField
        id="Phone"
        type="number"
        error={phoneE}
        label="Phone"
        variant="standard"
        value={phone}
        onChange={handlePhoneChange}
        helperText={phoneE ? 'Enter a valid 10-digit phone number' : ''}
      />
    </Box>
  );
}

export default Personal;
