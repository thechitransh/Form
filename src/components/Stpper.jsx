import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { Store } from "../context/Store";
import Routers from "../router/Routers";

const steps = ["Personal Details", "Address Information", "Confirm Details"];

export default function Stpper() {
  const navigate = useNavigate();
  const {
    name,
    email,
    phone,
    submit,
    setnameE,
    setemailE,
    setphoneE,
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
  } = useContext(Store);
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const [error, setError] = useState(false);
  const [validateStep, setValidateStep] = useState(() => () => true);

  const isStepOptional = (step) => step === 1;
  const isStepSkipped = (step) => skipped.has(step);

  const handleNext = () => {
    if (!validateStep()) {
      setError(true);
      return;
    }
    setError(false);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if (activeStep === 2) {
      localStorage.setItem(
        "UserDetails",
        JSON.stringify({
          name,
          email,
          phone,
          addressLine1,
          addressLine2,
          city,
          state,
          zipcode,
        })
      );
      navigate("/submit");
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  useEffect(() => {
    if (activeStep === 0) {
      navigate("/");
    } else if (activeStep === 1) {
      navigate("/address");
      localStorage.setItem(
        "UserDetails",
        JSON.stringify({
          name,
          email,
          phone,
        })
      );
    } else if (activeStep === 2) {
      navigate("/confirm");
      localStorage.setItem(
        "UserDetails",
        JSON.stringify({
          name,
          email,
          phone,
          addressLine1,
          addressLine2,
          city,
          state,
          zipcode,
        })
      );
    } else if (activeStep === 3) {
      navigate("/submit");
    }
  }, [activeStep]);

  return (
    <Box sx={{ width: "100%", paddingY: "40px" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Stack
        sx={{
          width: "100%",
          alignItems: "center",
          marginTop: "20px",
          visibility: error ? "visible" : "hidden",
        }}
        spacing={2}
      >
        <Alert variant="filled" severity="error">
          All Fields Are Required
        </Alert>
      </Stack>
      <Routers setValidation={setValidateStep} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          pt: 2,
          visibility: submit ? "hidden" : "visible",
        }}
      >
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button
          sx={{ visibility: activeStep == 3 ? "hidden" : "visible" }}
          size="large"
          onClick={handleNext}
        >
          {activeStep === steps.length - 1 ? "Submit" : "Next"}
        </Button>
      </Box>
    </Box>
  );
}
