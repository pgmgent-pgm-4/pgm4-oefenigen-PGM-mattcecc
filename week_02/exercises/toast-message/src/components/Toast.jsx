import React from "react";
import styles from "styled-components";

const Card = styles.div`
  width: 200px;
  height: 100px;
  margin: 10px;
  padding: 10px;
  border: 1px solid black;
  `;

const Success = styles(Card)`
  background-color: green;`;
const Error = styles(Card)`
    background-color: red;`;
const Warning = styles(Card)`
        background-color: yellow;`;
const Info = styles(Card)`
        background-color: blue;`;

export default function Toast({ type }) {
  const status = [
    { type: "success", message: "Success!" },
    { type: "error", message: "Error!" },
    { type: "warning", message: "Warning!" },
    { type: "info", message: "Info!" },
  ];

  switch (type) {
    case "success":
      return (
        <div>
          <Success key={type}>
            <h2>{type}</h2>
            <p>{status[0].message}</p>
          </Success>
        </div>
      );
     
    case "error":
      return (
        <div>
          <Error key={type}>
            <h2>{type}</h2>
            <p>{status[0].message}</p>
          </Error>
        </div>
      );
    case "warning":
      return (
        <div>
          <Warning key={type}>
            <h2>{type}</h2>
            <p>{status[0].message}</p>
          </Warning>
        </div>
      );
      case "info":
      return (
        <div>
          <Info key={type}>
            <h2>{type}</h2>
            <p>{status[0].message}</p>
          </Info>
        </div>
      );

    default:
      
  }
}
