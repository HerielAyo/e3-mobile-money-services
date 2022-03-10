import React from "react";
import BTable from "react-bootstrap/Table";

import { useTable } from "react-table";

function TribePaymentDetails() {

  const onLogoutBtnClicked = ()=>{
    window.location.href = '/tribe/login'
  }

  const onReceivedBtnClicked = ()=>{
    window.location.href = "/received/tribe/payment/details"
  }
  
  const onSentBtnClicked = ()=>{
    window.location.href = "/sent/tribe/payment/details"
  }
  const columns = React.useMemo(
    () => [
      {
        Header: "All Transaction Records",
        columns: [
          {
            Header: "ID",
            accessor: "id",
          },
          {
            Header: "From Tribe ID",
            accessor: "tid",
          },
          {
            Header: "Sender Phone #",
            accessor: "phone_number",
          },
          {
            Header: "Sender Name",
            accessor: "name",
          },
          {
            Header: "Amount",
            accessor: "amount",
          },
          {
            Header: "Time",
            accessor: "time",
          },
          {
            Header: "Transaction Type",
            accessor: "transaction_type",
          },
          {
            Header: "Payment Method",
            accessor: "payment_method",
          },
          {
            Header: "Transaction Status",
            accessor: "status",
          },
        ],
      },
    ],
    []
  );
  const data = React.useMemo(
    () => [
      {
        id: 1,
        tid:12,
        phone_number: "+255767654400",
        name: "Heriel Jacob",
        amount: "10,000",
        time: "04, Mar 2022 11:35 AM",
        transaction_type:'Sent',
        payment_method:'M-Pesa',
        status: "Processed",
      },
      {
        id: 2,
        tid:34,
        phone_number: "+25578645325",
        name: "Alfayo Kweka",
        amount: "10,000",
        time: "05, Mar 2022 9:22 AM",
        transaction_type:'Received',
        payment_method:'M-Pesa',
        status: "Processed",
      },
      {
        id: 3,
        tid:27,
        phone_number: "+25576009354",
        name: "John Robert",
        amount: "10,000",
        time: "07, Mar 2022 1:49 PM",
        transaction_type:'Sent',
        payment_method:'Tigo Pesa',
        status: "Not Processed",
      },
      {
        id: 4,
        tid:55,
        phone_number: "+255744489212",
        name: "Ally Mafuru",
        amount: "10,000",
        time: "07, Mar 2022 1:49 PM",
        transaction_type:'Received',
        payment_method:'M-Pesa',
        status: "Processed",
      },
      {
        id: 5,
        tid:103,
        phone_number: "+25576118118",
        name: "Jimson Kindoki",
        amount: "10,000",
        time: "23, Feb 2022 1:49 PM",
        transaction_type:'Received',
        payment_method:'Tigo Pesa',
        status: "Not Processed",
      },
    ],
    []
  );
  return (
    <div className="container-fluid" style={{ background: "lightblue" }}>
      <div className="mt-3"></div>
      <div className="row">
        <div
          className="col-2 mt-3 border-right border-success border-top rounded"
          style={{ background: "lightblue" }}
        >
          <div className="row">
          <p className="col h5 py-2">[Tribe Name] Dashboard</p>
          </div>
          <div className="row">
          <button className="col btn btn-success m-3 " onClick={onReceivedBtnClicked}>Received Transactions</button>
          </div>
          <div className="row">
          <button className=" col btn btn-info m-3" onClick={onSentBtnClicked}>Sent Transactions</button>
          </div>
          <div className="row">
          <button className="col btn btn-danger m-3" onClick={onLogoutBtnClicked}>Logout</button>
          </div>
          </div>
        <div className="col-10 container d-flex align-items-center justify-content-center pt-3">
          <Table columns={columns} data={data} />
        </div>
     
      </div>
    </div>
  );
}

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  // Render the UI for your table
  return (
    <BTable striped bordered hover size="sm" {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </BTable>
  );
}

export default TribePaymentDetails;
