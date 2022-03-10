import React from "react";


function PendingPayment() {
  let amount = "10,000"
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
        <div className=" pr-3 d-flex align-items-center justify-content-end">
          <button className="btn btn-danger" disabled>
            Pending Payment
          </button>
        </div>
        <div className="pt-3 d-flex align-items-center justify-content-center">
          <p  style={{ fontSize: 25, color:'#333333'}}>Complete Your Payment</p>
        </div>
        <div className="pt-3 px-3 d-flex align-items-center justify-content-center">
          <p>
            You will receive a payment confirmation dialog on your mobile phone
            from Vodacom M-Pesa to process your Tshs {amount} payment
          </p>
        </div>
        <div className="pt-3 pl-3">
          <p>
            If the payment is not completed within 2 hours your order will be
            cancelled
          </p>
        </div>
      </div>
    </div>
  );
}

export default PendingPayment;
