import React from "react";
import { useState} from "react"

function PaymentOptions() {
  const [method, setMethod] = useState('')

  const onMethodChanged =(e)=>{
    setMethod(e.currentTarget.value)
  }
  const handleMethod =()=>{
    if(method.length>0){
      window.location.href = '/paynumber?method='+method
    }else{

    }
  }
  return (
    <div className="container d-flex align-items-center justify-content-center py-3">
      <div className="pt-3 mt-3 " style = {{width:'650px', height:'400px', borderRadius:'2px', background:'lightblue', borderRadius:'25px' }}>
        <div className="d-flex align-items-center justify-content-center">
          <p style={{ fontSize: 25, color:'#333333'}}>Payment Method</p>
        </div>
        <div className="pt-3 d-flex align-items-center justify-content-center">
          <p>Choose your preffered Payment Method</p>
        </div>
        <div className="p-3">
          <div className="form-check-inline px-2">
            <label className="form-check-label" for="radio1">
              <input
                type="radio"
                className="form-check-input"
                id="mpesa"
                name="mpesa"
                value="mpesa"
                checked={method === "mpesa"}
                onChange={onMethodChanged}
                // checked
              />
             Vodacom M-pesa
            </label>
          </div>
          <div className="form-check-inline px-2">
            <label className="form-check-label" for="radio2">
              <input
                type="radio"
                className="form-check-input"
                id="tigopesa"
                name="tigopesa"
                value="tigopesa"
                checked={method === "tigopesa"}
                onChange={onMethodChanged}
              />
              Tigo Pesa
            </label>
          </div>
          <div className="form-check-inline px-2">
            <label className="form-check-label" for="radio2">
              <input
                type="radio"
                className="form-check-input"
                id="airtelmoney"
                name="airtelmoney"
                value="airtelmoney"
                checked={method === "airtelmoney"}
                onChange={onMethodChanged}
              />
              Airtel Money
            </label>
          </div>
          <div className="form-check-inline px-2">
            <label className="form-check-label" for="radio2">
              <input
                type="radio"
                className="form-check-input"
                id="other"
                name="other"
                value="other"
                checked={method === "other"}
                onChange={onMethodChanged}
              />
              Other Methods
            </label>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center pt-3">
        <button type="submit" class="btn btn-success" onClick={handleMethod}>
        
        Continue with payment
      </button>
      </div>
      </div>
     
    </div>
  );
}

export default PaymentOptions;
