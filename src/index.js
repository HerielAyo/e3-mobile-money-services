import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PaymentOptions from "./paymentOptions";
import PendingPayment from "./pendingPayment";
import DashboardLogin from "./dashboardLogin";
import PayNumber from "./payNumber";
import PaymentDetails from "./paymentDetails";
import ReceivedTribePaymentDetails from "./receivedTribePaymentDetails";
import TribeLogin from "./tribeLogin";
import TribePaymentDetails from "./tribePaymentDetails";
import SentTribePaymentDetails from "./sentTribePaymentDetails";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardLogin />} />
        <Route path="/dashboard" element={<PaymentDetails />} />
        <Route path="/pending/payment" element={<PendingPayment />} />
        <Route path="/dashboard/login" element={<DashboardLogin />} />
        <Route path="/paynumber" element={<PayNumber />} />
        <Route path="/payment/options" element={<PaymentOptions />} />
        <Route path="/tribe/login" element={<TribeLogin />} />
        <Route path="/tribe/payment/details" element={<TribePaymentDetails />} />
        <Route path="/received/tribe/payment/details" element={<ReceivedTribePaymentDetails />} />
        <Route path="/sent/tribe/payment/details" element={<SentTribePaymentDetails />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
