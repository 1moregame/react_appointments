import React, { useState } from "react";
import { Routes, Route, Navigate, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  const [contacts, setContacts] = useState([
    {
      name: "Test Name",
      phone: "555-555-5555",
      email: "test.name@testmail.com",
    },
  ]);

  const addContact = ({ name, phone, email }) => {
    const newContact = { name, phone, email };
    setContacts((prev) => {
      return [...prev, newContact];
    });
  };

  const [appointments, setAppointments] = useState([
    {
      title: "First Appointment",
      contact: "John",
      date: "Sun Jul 03 2022",
      time: "17:30",
    },
    {
      title: "Second Appointment",
      contact: "Jacob",
      date: "Sat Aug 06 2022",
      time: "17:30",
    },
  ]);

  const addAppointment = ({ title, contact, date, time }) => {
    const newAppointment = {
      title: title,
      contact: contact,
      date: new Date(date.replace(/-/g, "/")).toDateString(), //replace method is a hack to correct the timezone offset
      time: time,
    };
    setAppointments((prev) => [...prev, newAppointment]);
  };

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS}>Contacts</NavLink>
        <NavLink to={ROUTES.APPOINTMENTS}>Appointments</NavLink>
      </nav>
      <main>
        <Routes>
          <Route
            path="/"
            element={<Navigate to={ROUTES.CONTACTS} replace={true} />}
          />
          <Route
            path={ROUTES.CONTACTS}
            element={
              <ContactsPage
                contacts={contacts}
                addContact={addContact}
                setContacts={setContacts}
              />
            }
          />
          <Route
            path={ROUTES.APPOINTMENTS}
            element={
              <AppointmentsPage
                appointments={appointments}
                addAppointment={addAppointment}
                setAppointments={setAppointments}
                contacts={contacts}
              />
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
