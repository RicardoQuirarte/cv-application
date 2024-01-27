import { useState } from "react";
import "/src/styles/form.css";

export default function General() {
  const [show, setShow] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");

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
    />
  ) : (
    <ShowData
      toggleBool={handleChange}
      name={name}
      email={email}
      phone={phone}
      location={location}
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
  location,
}) {
  return (
    <>
      <h2>General information</h2>
      <form action="" className="section">
        <label htmlFor="name">Full name</label>
        <input
          onChange={handleName}
          value={name}
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={handleEmail}
          value={email}
          type="email"
          name="email"
          id="email"
          placeholder="example@gmail.com"
        />
        <label htmlFor="phone">Phone number</label>
        <input
          onChange={handlePhone}
          value={phone}
          type="tel"
          name="phone"
          id="phone"
          placeholder="1234567890"
          maxLength="10"
        />
        <label htmlFor="location">Location</label>
        <input
          onChange={handleLocation}
          value={location}
          type="text"
          name="location"
          id="location"
          placeholder="Narnia"
        />
        <div>
          <button onClick={toggleBool}>Submit</button>
        </div>
      </form>
    </>
  );
}

function ShowData({ toggleBool, name, email, phone, location }) {
  return (
    <div className="section">
      <h2>General information</h2>
      <p className="info">Name:</p>
      <h4>{name}</h4>
      <p className="info">Email:</p>
      <h4>{email}</h4>
      <p className="info">Phone:</p>
      <h4>{phone}</h4>
      <p className="info">Location:</p>
      <h4>{location}</h4>
      <button onClick={toggleBool}>Edit</button>
    </div>
  );
}
