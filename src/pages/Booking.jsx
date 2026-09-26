import { useState } from "react";
import { supabase } from "./supabase";

function Booking() {
  const [name, setName] = useState("");
  const [tickets, setTickets] = useState("");
  const [stand, setStand] = useState("General Stand");
  const [venue, setVenue] = useState("Wankhede Stadium");

  async function handleBooking() {
  if (!name || !tickets || !stand || !venue) {
    alert("Please fill all the details");
    return;
  }

  const { data, error } = await supabase
    .from("bookings")
    .insert([
      {
        name: name,
        tickets: Number(tickets),
        stand: stand,
        venue: venue
      }
    ]);

  if (error) {
    console.error(error);
    alert("Booking failed");
    return;
  }

  alert("Ticket booked successfully!");
}
  return (
    <main>
      <h1>Book Your Ticket</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Number of tickets"
        value={tickets}
        onChange={(e) => setTickets(e.target.value)}
      />
      <br /><br />

 <select value={stand} onChange={(e) => setStand(e.target.value)}>
  <option>General Stand</option>
  <option>VIP Stand</option>
</select>
<br /><br />

<select value={venue} onChange={(e) => setVenue(e.target.value)}>
  <option>Wankhede Stadium</option>
  <option>M. Chinnaswamy Stadium</option>
</select>

      <h3>Booking Details</h3>
      <p>Name: {name}</p>
      <p>Tickets: {tickets}</p>
      <p>Stand: {stand}</p>
      <p>Venue: {venue}</p>

      <button onClick={handleBooking}>Book Ticket</button>
    </main>
  );
}

export default Booking;