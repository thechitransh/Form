import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Store } from "../context/Store";

function Submit() {
  const { SetSubmit } = useContext(Store);
  const navigate = useNavigate();

  const handleSubmit = () => {
    SetSubmit(true);
    navigate("/thank");
  };

  return (
    <Box
      sx={{
        p: 2,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "55vh",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Submit Your Details
      </Typography>
      <Typography variant="body1" gutterBottom>
        Please confirm that all the details you have provided are correct before
        submitting.
      </Typography>
      <Button onClick={handleSubmit} variant="contained" sx={{ mt: 2 }}>
        Submit
      </Button>
    </Box>
  );
}

export default Submit;
