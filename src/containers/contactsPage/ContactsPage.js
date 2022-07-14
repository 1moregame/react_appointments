import { useEffect, useState } from "react";
import React from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";
export const ContactsPage = ({ contacts, addContact, setContacts }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (duplicate) {
      return;
    }

    addContact({ name, phone, email });
    setName("");
    setPhone("");
    setEmail("");
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    setDuplicate(
      contacts.filter((contact) => contact.name === name).length > 0
    );
  }, [name, contacts]);

  const handleDelete = ({ target }) => {
    let revisedContacts = contacts.filter(
      (_, index) => target.id !== index.toString()
    );
    setContacts(revisedContacts);
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          duplicate={duplicate}
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
