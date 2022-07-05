import { useState } from "react";
import React from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";
export const ContactsPage = ({ contacts, addContact, setContacts }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isDuplicate()) return;

    addContact({ name: name, phone: phone, email: email });
    setName("");
    setPhone("");
    setEmail("");
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  const isDuplicate = () => {
    let duplicate =
      contacts.filter((contact) => contact.name === name).length > 0;

    return duplicate;
  };
  const handleDelete = ({ target }) => {
    let revisedContacts = contacts.filter(
      (contact, index) => target.id !== index.toString()
    );
    setContacts(revisedContacts);
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={(value) => setName(value)}
          phone={phone}
          setPhone={(value) => setPhone(value)}
          email={email}
          setEmail={(value) => setEmail(value)}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList itemList={contacts} handleDelete={handleDelete} />
      </section>
    </div>
  );
};
