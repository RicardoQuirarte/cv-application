import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Form from "./components/form.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <h1>CV Application</h1>
    <Form
      title={"General Information"}
      tel={"tel"}
      text={"text"}
      field1={"Name"}
      field2={"Email"}
      field3={"Phone number"}
      field4={"Location"}
    />
    <Form
      title={"Educational Experience"}
      tel={"date"}
      text={"date"}
      field1={"School name"}
      field2={"Title of study"}
      field3={"Start of study"}
      field4={"End of study"}
    />
    <Form
      title={"Practical Experience"}
      tel={"date"}
      text={"date"}
      field1={"Company name"}
      field2={"Position title"}
      field3={"Start date"}
      field4={"Finish date"}
      extraInput={true}
    />
  </React.StrictMode>
);
