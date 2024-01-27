import { useState } from "react";
import "/src/styles/form.css";

export default function Experiment() {
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
    <General
      toggleBool={handleChange}
      name={handleName}
      email={handleEmail}
      phone={handlePhone}
      location={handleLocation}
    />
  ) : (
    <Create
      toggleBool={handleChange}
      name={name}
      email={email}
      phone={phone}
      location={location}
    />
  );
}

function General({ toggleBool, name, email, phone, location }) {
  return (
    <>
      <form action="" className="section">
        <label htmlFor="name">Full name</label>
        <input
          onChange={name}
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={email}
          type="email"
          name="email"
          id="email"
          placeholder="example@gmail.com"
        />
        <label htmlFor="phone">Phone number</label>
        <input
          onChange={phone}
          type="tel"
          name="phone"
          id="phone"
          placeholder="1234567890"
          maxLength="10"
        />
        <label htmlFor="location">Location</label>
        <input
          onChange={location}
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

function Create({ toggleBool, name, email, phone, location }) {
  return (
    <div className="section">
      <h3>{name}</h3>
      <h3>{email}</h3>
      <h3>{phone}</h3>
      <h3>{location}</h3>
      <button onClick={toggleBool}>Edit</button>
    </div>
  );
}
