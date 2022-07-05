import React from "react";

export const ContactPicker = ({ contacts, handleChange }) => {
  return (
    <select
      name="contactPicker"
      id="contactPicker"
      onChange={(e) => handleChange(e.target.value)}
    >
      <option key="default" value="None">
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
