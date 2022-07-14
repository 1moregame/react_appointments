import React, { useEffect, useState } from "react";
import { TileList } from "../../components/tileList/TileList";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";

export const AppointmentsPage = ({
  appointments,
  contacts,
  addAppointment,
  setAppointments,
}) => {
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    setDate(getTodayString());
    setTime(currentTime());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    addAppointment({ title, contact, date, time });
    setTitle("");
    setContact("");
    setDate(getTodayString());
    setTime(currentTime());
  };

  const handleDelete = ({ target }) => {
    let revisedAppointments = appointments.filter(
      (appt, index) => target.id !== index.toString()
    );
    setAppointments(revisedAppointments);
  };
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };
  const currentTime = () => {
    const date = new Date();
    let hour = date.getHours().toString();
    hour = hour.length === 1 ? "0" + hour : hour;
    let minutes = date.getMinutes().toString();
    minutes = minutes.length === 1 ? "0" + minutes : minutes;
    return `${hour}:${minutes}`;
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={contacts}
          title={title}
          setTitle={(value) => setTitle(value)}
          contact={contact}
          setContact={(value) => setContact(value)}
          date={date}
          setDate={(value) => setDate(value)}
          time={time}
          setTime={(value) => setTime(value)}
          handleSubmit={handleSubmit}
          getTodayString={getTodayString}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList itemList={appointments} handleDelete={handleDelete} />
      </section>
    </div>
  );
};
