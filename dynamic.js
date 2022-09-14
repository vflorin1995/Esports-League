const players = {
  images: ['./img/wirtual.jpg', './img/player1.jpg', './img/player2.jpg', './img/player3.jpg', './img/player4.jpg', './img/player5.jpg'],
  name: ['Wirtual', 'PAC2', 'Mika', 'MaX32', 'ShibaRacer', 'Seredinsky'],
  description: ['Trackmania`s Best RPG Player', 'Trackmania`s Best Speed player', 'Trackmania`s Best RPG player', 'Trackmania`s Best Speed player', 'Trackmania`s Best Speed player', 'Trackmania`s Best Speed player'],
  history: ['Trackmania Content Creator & Streamer which holds multiple World records on RPC maps', 'TrackMania player for GRmotorsport, World Champion in 2017, TMGL Fall 20 winner, 1st Zrt 2019', 'TrackMania player for GRmotorsport, World Champion in 2017, TMGL Fall 20 winner, 1st Zrt 2019', 'TrackMania player for MomoRacing, World Champion in 2018, TMGL Fall 21 winner, 2nd Zrt 2021', 'TrackMania player for XYdrifters, World Champion in 2019, 5x GA winner, TMGL Fall 21 winner, 1st Zrt 2020', 'TrackMania player for Skids, World Champion in 2020, TMGL Fall 21 winner, 2nd Zrt 2020'],
};

const dynamic = document.querySelector('.playerArea');

const playerListTitle = document.createElement('h3');
playerListTitle.className = 'playerList secondary';
playerListTitle.innerText = 'Player list';

const playerSection = document.createElement('div');
playerSection.className = 'playerSection';

for (let i = 0; i < players.images.length; i += 1) {
  const playerCard = document.createElement('div');
  if ((i + 3) % 3 === 0) {
    playerCard.className = 'flex';
  } else {
    playerCard.className = 'playerCard';
  }

  const playerImg = document.createElement('img');
  playerImg.src = players.images[i];
  playerImg.alt = 'player';
  playerImg.className = 'playerImg';

  const container = document.createElement('div');

  const playerName = document.createElement('p');
  playerName.className = 'fontSize20 fontWeight700';
  playerName.innerText = players.name[i];

  const playerDescription = document.createElement('p');
  playerDescription.className = 'playerAchivement fontSize14 primary italic';
  playerDescription.innerText = players.description[i];

  const playerHistory = document.createElement('p');
  playerHistory.className = 'playerDescription fontSize12 mRight20';
  playerHistory.innerText = players.history[i];

  container.append(playerName, playerDescription, playerHistory);
  playerCard.append(playerImg, container);
  playerSection.appendChild(playerCard);
}

const buttonContainer = document.createElement('div');
buttonContainer.className = 'flex justifyCenter displayHideBig';

const button = document.createElement('button');
button.type = 'button';
button.className = 'moreBtn';
button.innerHTML = 'MORE <i class="red fa-solid fa-angle-down"></i> ';

buttonContainer.appendChild(button);

dynamic.append(playerListTitle, playerSection, buttonContainer);