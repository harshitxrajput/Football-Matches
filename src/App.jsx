import { useState, useEffect } from 'react';
import MatchCard from './components/MatchCard';

const App = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://apiv3.apifootball.com/?action=get_events&from=2025-05-05&to=2025-06-05&league_id=152&APIkey=fab27398cd2ad02244952fa5883cb502a94d72bf9bbba728a2df601d03f7e98c')
      .then(response => response.json())
      .then(data => {
        setMatches(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch matches');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-12 text-lg text-gray-300">Loading matches...</div>;
  if (error) return <div className="text-center py-12 text-lg text-red-400">{error}</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto p-5">
        <div className="text-center space-y-4 py-8">
          <h1 className="text-4xl font-bold text-white mb-2 tracking-tight">
            Upcoming Football Matches
          </h1>
          <p className="text-gray-400 text-lg font-medium">
            Timeline: May 5, 2025 - June 5, 2025
          </p>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
          {matches.map(match => (
            <MatchCard key={match.match_id} match={match} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
