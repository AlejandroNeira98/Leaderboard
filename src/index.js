import './style.css';
import ScoreList from "./scorelist";


const leaderboard = new ScoreList();

window.onload = () => {
  document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    leaderboard.addScore();
    console.log('button works')
  });
};

