import React, { useContext, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Store } from "../context/Store";

function Confirm({ setValidation }) {
  const {
    name,
    email,
    phone,
    addressLine1,
    addressLine2,
    city,
    state,
    zipcode,
  } = useContext(Store);

  const validateForm = () => {
    return true;
  };

  useEffect(() => {
    setValidation(() => validateForm);
  }, [setValidation]);

  return (
    <Box sx={{ p: 5 }}>
      <Typography variant="h6" gutterBottom>
        Confirm Details
      </Typography>
      <Box
        sx={{
          mt: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "100px",
            maxWidth: "80vw",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Typography>
            <strong>Name:</strong> {name}
          </Typography>
          <Typography>
            <strong>Email:</strong> {email}
          </Typography>
          <Typography>
            <strong>Phone:</strong> {phone}
          </Typography>
          <Typography>
            <strong>Address Line 1:</strong> {addressLine1}
          </Typography>
          <Typography>
            <strong>Address Line 2:</strong> {addressLine2}
          </Typography>
          <Typography>
            <strong>City:</strong> {city}
          </Typography>
          <Typography>
            <strong>State:</strong> {state}
          </Typography>
          <Typography>
            <strong>Zipcode:</strong> {zipcode}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Confirm;
