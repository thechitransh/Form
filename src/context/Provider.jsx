import React, { useEffect, useState } from "react";
import { Store } from "./Store";

function Provider({ children }) {
  const [name, Setname] = useState("");
  const [email, Setemail] = useState("");
  const [phone, Setphone] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [nameE, setnameE] = useState(false);
  const [emailE, setemailE] = useState(false);
  const [phoneE, setphoneE] = useState(false);
  const [addressLine1E, setAddressLine1E] = useState(false);
  const [addressLine2E, setAddressLine2E] = useState(false);
  const [cityE, setCityE] = useState(false);
  const [stateE, setStateE] = useState(false);
  const [zipcodeE, setZipcodeE] = useState(false);
  const [submit, SetSubmit] = useState(false);

  useEffect(() => {
    const storedUserDetails = localStorage.getItem("UserDetails");
    if (storedUserDetails) {
      const {
        name,
        email,
        phone,
        addressLine1,
        addressLine2,
        city,
        state,
        zipcode,
      } = JSON.parse(storedUserDetails);
      Setname(name || "");
      Setemail(email || "");
      Setphone(phone || "");
      setAddressLine1(addressLine1 || "");
      setAddressLine2(addressLine2 || "");
      setCity(city || "");
      setState(state || "");
      setZipcode(zipcode || "");
    }
  }, []);

  return (
    <Store.Provider
      value={{
        name,
        Setname,
        email,
        Setemail,
        phone,
        Setphone,
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
        nameE,
        setnameE,
        emailE,
        setemailE,
        phoneE,
        setphoneE,
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
        submit,
        SetSubmit,
      }}
    >
      {children}
    </Store.Provider>
  );
}

export default Provider;
