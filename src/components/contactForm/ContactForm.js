import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  const nameChange = ({ target }) => {
    setName(target.value);
  };
  const phoneChange = ({ target }) => {
    setPhone(target.value);
  };
  const emailChange = ({ target }) => {
    setEmail(target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="Name"
        onChange={nameChange}
      />
      <input
        type="tel"
        name="phone"
        value={phone}
        placeholder="Phone"
        pattern="^\D?(\d?)\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$"
        onChange={phoneChange}
      />
      <input
        type="email"
        name="email"
        value={email}
        placeholder="Email"
        onChange={emailChange}
      />
      <input type="submit" value="Add Contact" />
    </form>
  );
};
