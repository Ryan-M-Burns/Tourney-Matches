import React from 'react';
import Player from './Player';
import matchData from '../data/matchData';
import playerData from '../data/playerData';
import { preparePlayerData, addWinsToPlayers } from '../helpers/playerHelpers';

const PlayerList = props => {
  const playerDataArray = preparePlayerData(playerData);
  const parsePlayerData = addWinsToPlayers(playerDataArray, matchData);
  const onePlayer = parsePlayerData[0];

  return (
    <section className="PlayerList">
      <h1>Current Participating Players</h1>
      <Player gamerTag={onePlayer.gamerTag} firstName={onePlayer.firstName} lastName={onePlayer.lastName} wins={onePlayer.wins} />
    </section>
  );
};

export default PlayerList;