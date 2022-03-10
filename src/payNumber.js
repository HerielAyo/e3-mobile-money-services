import React from "react";
import { useState } from "react"

function PayNumber() {
  const [number, setNumber] = useState('')
  const [invalidNumber, setInvalidNumber] =  useState('')
  let url = new URL(window.location.href);
  let method = url.searchParams.get("method");
  const handlePayment =()=>{
    if((number.charAt(0) === '+' && number.length === 13) || (number.charAt(0) === '0' && number.length === 10)){
      window.location.href = '/pending/payment'
    }else{
      setInvalidNumber("Invalid Number")
    }

  }
  
  let methodExplanation = false
  if(method ==="mpesa"){
 methodExplanation = "Vodacom Mpesa"
  }else if(method ==="tigopesa"){
    methodExplanation = "Tigo Pesa"
  }else if(method ==="airtelmoney"){
    methodExplanation = "Airtel Money"
  }else{
    methodExplanation = "Your Method of Payment"
  }

  return (
    <div className="container d-flex align-items-center justify-content-center py-3">
      <div
        className="pt-3 mt-3 "
        style={{
          width: "650px",
          height: "400px",
          borderRadius: "2px",
          background: "lightblue",
          borderRadius: "25px",
        }}
      >
        <div className="pt-3 d-flex align-items-center justify-content-center">
          <p style={{ fontSize: 25, color: "#333333" }}>Enter Payment Number</p>
        </div>
        <div className="pt-3 d-flex align-items-center justify-content-center">
          <p>Payment number for {methodExplanation}</p>
        </div>
        <div className="pt-3 d-flex align-items-center justify-content-center">
          <p className="text-danger">{invalidNumber}</p>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <input
            type="text"
            className="form-control"
            style={{ width: "60%" }}
            onChange = {(e)=>setNumber(e.target.value)}
          />
        </div>
        <div className="d-flex align-items-center justify-content-center pt-3">
        <button type="submit" className="btn btn-success" onClick={handlePayment}>
        
        Confirm Payment
      </button>
      </div>      
      </div>
    </div>
  );
}

export default PayNumber;
