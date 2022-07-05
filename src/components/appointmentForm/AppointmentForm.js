import { ContactPicker } from "../contactPicker/ContactPicker";
export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
  getTodayString,
}) => {
  const FIFTEEN_MINUTES = 60 * 15;
  const handleChange = (value) => {
    console.log(`Value for change: ${value}`);
    setContact(value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title" aria-label="Appointment Ttile" hidden></label>
      <input
        type="text"
        name="title"
        placeholder="Appointment Name"
        value={title}
        onChange={({ target }) => setTitle(target.value)}
        required
      />
      <label htmlFor="contactPicker" aria-label="Appointment With" hidden>
        Appointment With
      </label>
      <ContactPicker contacts={contacts} handleChange={handleChange} />
      <label htmlFor="date" aria-label="date" hidden>
        Date
      </label>
      <input
        id="datePicker"
        type="date"
        name="date"
        placeholder="Date"
        pattern="^(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d$"
        min={getTodayString()}
        value={date}
        onChange={({ target }) => setDate(target.value)}
        required
      />
      <label htmlFor="time" aria-label="time" hidden>
        Time
      </label>
      <input
        id="timePicker"
        type="time"
        name="time"
        placeholder="Time"
        value={time}
        step={FIFTEEN_MINUTES}
        onChange={({ target }) => setTime(target.value)}
        required
      />

      <input type="submit" value="Add Appointment" />
    </form>
  );
};
