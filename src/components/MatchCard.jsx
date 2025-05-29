import React from 'react';
import { IoNotifications, IoLocationSharp } from 'react-icons/io5';

const MatchCard = ({ match }) => {
  const matchTime = new Date(match.match_date + ' ' + match.match_time).toLocaleString();

  return (
    <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-xl rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-700/50 group overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Match Time with Status Indicator */}
      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <div className="text-blue-400 font-medium bg-gray-800/50 px-4 py-1 rounded-full">
          {matchTime}
        </div>
      </div>

      {/* Teams Container */}
      <div className="flex justify-between items-center my-6 relative">
        <div className="text-center flex-1 z-10 transform transition-transform group-hover:scale-105">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-transparent rounded-full filter blur-md"></div>
            <img 
              src={match.team_home_badge || 'default-team.png'} 
              alt={match.match_hometeam_name}
              className="w-20 h-20 object-contain mb-3 mx-auto drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            />
          </div>
          <h3 className="text-base font-semibold text-gray-200 mt-4">{match.match_hometeam_name}</h3>
          <span className="text-xs text-gray-400 mt-1 block">Home Team</span>
        </div>

        {/* VS Badge */}
        <div className="flex flex-col items-center px-6">
          <div className="font-bold text-gray-500 text-xl bg-gray-800/50 px-4 py-2 rounded-lg border border-gray-700/50">
            VS
          </div>
        </div>

        <div className="text-center flex-1 z-10 transform transition-transform group-hover:scale-105">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-transparent rounded-full filter blur-md"></div>
            <img 
              src={match.team_away_badge || 'default-team.png'} 
              alt={match.match_awayteam_name}
              className="w-20 h-20 object-contain mb-3 mx-auto drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]"
            />
          </div>
          <h3 className="text-base font-semibold text-gray-200 mt-4">{match.match_awayteam_name}</h3>
          <span className="text-xs text-gray-400 mt-1 block">Away Team</span>
        </div>
      </div>

      {/* Match Info Footer */}
      <div className="flex justify-between text-sm text-gray-400 mt-6 pt-4 border-t border-gray-700/50">
        <div className="flex items-center gap-2">
          <IoNotifications className="w-4 h-4" />
          <span>{match.league_name}</span>
        </div>
        <div className="flex items-center gap-2">
          <IoLocationSharp className="w-4 h-4" />
          <span>{match.match_stadium}</span>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
