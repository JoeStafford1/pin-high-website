import { useParams } from 'react-router-dom';

function PlayerProfile() {
  let { playerId } = useParams();
  return <h2>Profile for Player {playerId}</h2>;
}

export default PlayerProfile;
