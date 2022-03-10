import React from "react";
import { useState } from "react";

function DashboardLogin() {
  const [inputs, setInputs] = useState({
    username: "heriel",
    password: "1234",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = () => {
    if (inputs.username === "heriel" && inputs.password === "1234") {
      console.log("passed");
      window.location.href = "/dashboard";
    } else {
      setErrorMsg("Email or Password is incorrect");
    }
  };

  const onSubmitTribeLogin = ()=>{
    window.location.href = "/tribe/login";
  }
  
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    setErrorMsg = "";
  };

  return (
    <div className="container d-flex align-items-center justify-content-center py-3">
      <div
        className="pt-3 mt-3 position-relative"
        style={{
          width: "650px",
          height: "400px",
          borderRadius: "2px",
          background: "lightblue",
          borderRadius: "25px",
        }}
      >
        <div className="d-flex align-items-center justify-content-center">
          <p style={{ fontSize: 25, color: "#333333" }}>
            E3Empower Africa Mobile Payments
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <p className="text-danger">{errorMsg}</p>
        </div>
        <div className="pt-3 d-flex align-items-center justify-content-center">
          <input
            type="text"
            className="form-control"
            style={{ width: "60%" }}
            name="username"
            value={inputs.username || ""}
            placeholder="Enter your Email Adress"
            onChange={handleChange}
          />
        </div>
        <div className="pt-3 d-flex align-items-center justify-content-center">
          <input
            type="password"
            className="form-control"
            style={{ width: "60%" }}
            name="password"
            value={inputs.password || ""}
            placeholder="Enter your Password"
            onChange={handleChange}
          />
        </div>

        <div className="d-flex align-items-center justify-content-center pt-3">
          <button type="submit" className="btn btn-success" onClick={onSubmit}>
            Login
          </button>
        </div>
        <div
          className="d-flex align-items-center justify-content-end pt-3 pr-3  w-100"
          style={{ marginTop: 90 }}
        >
          <button type="submit" className="btn btn-success" onClick={onSubmitTribeLogin}>
            Tribe Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default DashboardLogin;
