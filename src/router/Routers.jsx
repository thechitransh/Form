import React from "react";
import { Routes, Route } from "react-router-dom";
import Personal from "../pages/Personal";
import Address from "../pages/Address";
import Confirm from "../pages/Confirm";
import Submit from "../pages/Submit";
import Thank from "../pages/Thank";

const Routers = ({ setValidation }) => {
  return (
    <Routes>
      <Route path="/" element={<Personal setValidation={setValidation} />} />
      <Route
        path="/address"
        element={<Address setValidation={setValidation} />}
      />
      <Route
        path="/confirm"
        element={<Confirm setValidation={setValidation} />}
      />
      <Route path="/submit" element={<Submit />} />
      <Route path="/thank" element={<Thank />} />
    </Routes>
  );
};

export default Routers;
