import './App.css';
import PlayerList from "./component/PlayerList";
import MatchList from "./component/MatchList";

const App = () => {
  return (
    <div className="App">
      <h1>
        Tourney Matches {" "}
        <span>Where Coding and Tournaments find their Match!</span>
      </h1>
      <PlayerList />
      <MatchList />
    </div>
  );
};

export default App;
