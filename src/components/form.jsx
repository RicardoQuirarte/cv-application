import { useEffect, useState } from "react";
import "/src/styles/form.css";

export default function Form({
  title,
  tel,
  text,
  field1,
  field2,
  field3,
  field4,
  extraInput,
}) {
  const [show, setShow] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [extra, setExtra] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePhone(e) {
    setPhone(e.target.value);
  }

  function handleLocation(e) {
    setLocation(e.target.value);
  }

  function handleExtra(e) {
    setExtra(e.target.value);
  }

  function handleChange() {
    setShow(!show);
  }

  return show ? (
    <Input
      toggleBool={handleChange}
      handleName={handleName}
      name={name}
      handleEmail={handleEmail}
      email={email}
      handlePhone={handlePhone}
      phone={phone}
      handleLocation={handleLocation}
      location={location}
      handleExtra={handleExtra}
      extra={extra}
      tel={tel}
      text={text}
      field1={field1}
      field2={field2}
      field3={field3}
      field4={field4}
      title={title}
      extraInput={extraInput}
    />
  ) : (
    <ShowData
      toggleBool={handleChange}
      name={name}
      email={email}
      phone={phone}
      location={location}
      title={title}
      field1={field1}
      field2={field2}
      field3={field3}
      field4={field4}
      extraInput={extraInput}
      extra={extra}
    />
  );
}

function Input({
  toggleBool,
  handleName,
  name,
  handleEmail,
  email,
  handlePhone,
  phone,
  handleLocation,
  handleExtra,
  extra,
  location,
  field1,
  field2,
  field3,
  field4,
  tel,
  text,
  title,
  extraInput,
}) {
  return (
    <>
      <h2>{title}</h2>
      <form action="" className="section">
        <label htmlFor="name">{field1}</label>
        <input
          onChange={handleName}
          value={name}
          type="text"
          name="name"
          id="name"
        />
        <label htmlFor="email">{field2}</label>
        <input
          onChange={handleEmail}
          value={email}
          type="email"
          name="email"
          id="email"
        />
        {extraInput ? (
          <>
            <label htmlFor="txtArea">Main responsabilities</label>
            <textarea
              onChange={handleExtra}
              value={extra}
              name="txt"
              id="txt"
              cols="30"
              rows="10"
            ></textarea>
          </>
        ) : null}
        <label htmlFor="phone">{field3}</label>
        <input
          onChange={handlePhone}
          value={phone}
          type={tel}
          name="phone"
          id="phone"
          maxLength="10"
        />
        <label htmlFor="location">{field4}</label>
        <input
          onChange={handleLocation}
          value={location}
          type={text}
          name="location"
          id="location"
        />
        <div>
          <button onClick={toggleBool}>Submit</button>
        </div>
      </form>
    </>
  );
}

function ShowData({
  toggleBool,
  name,
  email,
  phone,
  location,
  title,
  field1,
  field2,
  field3,
  field4,
  extraInput,
  extra,
}) {
  return (
    <div className="section">
      <h2>{title}</h2>
      <p className="info">{field1}:</p>
      <h4>{name}</h4>
      <p className="info">{field2}:</p>
      <h4>{email}</h4>
      {extraInput ? (
        <>
          <p className="extra">Main responsabilities</p>
          <h4>{extra}</h4>
        </>
      ) : null}
      <p className="info">{field3}:</p>
      <h4>{phone}</h4>
      <p className="info">{field4}:</p>
      <h4>{location}</h4>
      <button onClick={toggleBool}>Edit</button>
    </div>
  );
}
