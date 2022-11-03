import './App.css';
import React from 'react';
import PlayerList from './component/PlayerList';
import MatchList from './component/MatchList';
import matchData from './data/matchData';
import playerData from './data/playerData';
import { preparePlayerData, addWinsToPlayers } from './helpers/playerHelpers';



const App = () => {
  const playerDataArray = preparePlayerData(playerData);
  const parsedPlayerData = addWinsToPlayers(playerDataArray, matchData);

  return (
    <div className="App">
      <h1>
        Tourney Matches
        <span>Where Coding and Tournaments find their Match!</span>
      </h1>
      <PlayerList playerData={parsedPlayerData} />;
      <MatchList matchData={matchData} />;
    </div>
  );
};

export default App;
