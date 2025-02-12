import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TournamentSchedule from './TournamentSchedule';
import LiveLeaderboard from './LiveLeaderboard';
import PlayerProfile from './PlayerProfile';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/schedule">Tournament Schedule</Link>
          <Link to="/leaderboard">Live Leaderboard</Link>
          <Link to="/players">Player Profiles</Link>
        </nav>

        <Routes>
          <Route path="/" element={<h1>Welcome to Pin High</h1>} />
          <Route path="/schedule" element={<TournamentSchedule />} />
          <Route path="/leaderboard" element={<LiveLeaderboard />} />
          <Route path="/players/:playerId" element={<PlayerProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
