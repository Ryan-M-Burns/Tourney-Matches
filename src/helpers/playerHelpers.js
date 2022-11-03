import playerData from '../data/playerData';
import matchData from '../data/matchData';


export const preparePlayerData = (playerData) => {
  return Object.values(playerData);
};


export const addWinsToPlayers = (playerDataArray, matchData) => {

  return playerDataArray.map(player => {

    const currentWins = matchData.reduce((accumulator, match) => {

      if (match.winner === player.gamerTag) {
        return accumulator++;
      }

      return accumulator;
    }, 0);

    player.wins = currentWins;
    return player;
  });

};

export default { preparePlayerData, addWinsToPlayers };