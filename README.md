# react_appointments
File is a front-end test using the react.js library.  The main challenges were met and the app was extended to delete contacts and appointments.  There was some challenge in the prop drilling to accomplish this and also some difficulty in the passing of functions.  

The completed app can be viewed on [Netlify](https://reliable-tarsier-1d3e42.netlify.app/appointments)

## Known issues: 
Safari will only accept time values in increments of 15 minutes.  The step function forces the value to adhere to this, but doesn't appear to actually update the value in 15 minute increments when using the arrow keys to change the minute value.  

## Possilbe extensions:
* Clicking on the tile for an appointment will allow editing of the appointment.
* Clicking on the tile for a contact will allow editing of the contact.
* Search for appointments/contacts.  
