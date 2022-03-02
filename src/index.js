import './style.css';
import ScoreList from './scorelist';

const leaderboard = new ScoreList();

window.onload = () => {
  leaderboard.refresh();
  document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault();
    leaderboard.addScore();
  });
  document.getElementById('refresh').addEventListener('click', () => {
    leaderboard.refresh();
  });
};
