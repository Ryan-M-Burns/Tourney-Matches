export const preparePlayerData = (playerData) => {
  return Object.values(playerData);
};


export const addWinsToPlayers = (playerDataArray, matchArr) => {

  return playerDataArray.map(player => {

    const currentWins = matchArr.reduce((accumulator, match) => {

      if (match.winner === player.gamerTag) {
        accumulator++;
      }

      return accumulator;
    }, 0);

    player.wins = currentWins;
    return player;
  });

};

export default { preparePlayerData, addWinsToPlayers };