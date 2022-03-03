const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/qRwmgdoG88ICPTNGbqdv/scores/';

const submit = async (user, score) => {
  await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      user: `${user}`,
      score: `${score}`,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export default class ScoreList {
  constructor() {
    this.list = [];
  }

  addScore() {
    const obj = {};
    obj.user = document.getElementById('name').value;
    obj.score = document.getElementById('score').value;
    if (obj.user !== '' && obj.value !== '') {
      this.list.push(obj);
      submit(obj.user, obj.score);
    }
    this.populateHTML();
    document.getElementById('name').value = null;
    document.getElementById('score').value = null;
  }

  populateHTML() {
    const ScoresDiv = document.getElementById('scores');
    ScoresDiv.innerHTML = '';
    let i = 0;
    this.list.forEach((obj) => {
      const scoreDiv = document.createElement('div');
      scoreDiv.innerText = `${obj.user}: ${obj.score}`;
      setTimeout(() => { ScoresDiv.appendChild(scoreDiv); }, i);
      i += 1100;
    });
  }

  async refresh() {
    this.response = await fetch(url).then((response) => response.json());
    this.list = this.response.result;
    this.populateHTML();
  }
}
