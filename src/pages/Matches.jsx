import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

function MatchCard(props) {
  return (
    <div className="match-card">
      <h2>
        {props.team1} vs {props.team2}
      </h2>

      <p>📍 {props.venue}</p>
      <p>📅 {props.date}</p>

      <button>Book Ticket</button>
    </div>
  );
}

function Matches() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    fetchMatches();
  }, []);

  async function fetchMatches() {
    const { data, error } = await supabase
      .from("Matches")
      .select("*");

    if (error) {
      console.error("Error fetching matches:", error);
    } else {
      setMatches(data);
    }
  }

  return (
    <main className="matches-page">
      <h1>Upcoming IPL Matches</h1>

      <div className="matches-grid">
        {matches.map((match) => (
          <MatchCard
            key={match.id}
            team1={match.team1}
            team2={match.team2}
            venue={match.venue}
            date={match.match_date}
          />
        ))}
      </div>
    </main>
  );
}

export default Matches;