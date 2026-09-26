import { useState } from "react";
import { supabase } from "./supabase";

function BookingHistory() {
  const [bookings, setBookings] = useState([]);
  async function getBookings() {
  const { data, error } = await supabase
    .from("bookings")
    .select("*");

  if (error) {
    console.error(error);
    alert("Failed to retrieve bookings");
    return;
  }

  setBookings(data);
}

  return (
  <main>
    <h1>Booking History</h1>

    <button onClick={getBookings}>
      View Bookings
    </button>
    <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Tickets</th>
      <th>Stand</th>
      <th>Venue</th>
    </tr>
  </thead>

  <tbody>
    {bookings.map((booking) => (
      <tr key={booking.id}>
        <td>{booking.name}</td>
        <td>{booking.tickets}</td>
        <td>{booking.stand}</td>
        <td>{booking.venue}</td>
      </tr>
    ))}
  </tbody>
</table>
  </main>
);
}

export default BookingHistory;