import React from "react";

export const ContactPicker = ({ contact, contacts, handleChange }) => {
  return (
    <select
      name="contactPicker"
      id="contactPicker"
      value={contact}
      onChange={(e) => handleChange(e.target.value)}
    >
      <option key="default" value="">
        Select Contact
      </option>
      {contacts.map((contact, index) => (
        <option key={index} value={contact.name}>
          {contact.name}
        </option>
      ))}
    </select>
  );
};
