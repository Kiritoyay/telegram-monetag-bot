let players = {};

function createPlayer(id) {
  if (!players[id]) {
    players[id] = {
      energy: 1000,
      coins: 0,
      seeds: 50,
      planted: 0
    };
  }

  return players[id];
}

function plant(id) {
  const player = createPlayer(id);

  if (player.energy < 100) {
    return {
      success: false,
      message: "⚡ Energia insuficiente."
    };
  }

  if (player.seeds <= 0) {
    return {
      success: false,
      message: "🌱 Você não possui sementes."
    };
  }

  player.energy -= 100;
  player.seeds--;

  setTimeout(() => {
    player.coins += 10;
    player.planted++;
  }, 1000);

  return {
    success: true,
    message: "🌱 Semente plantada! Aguarde 1 segundo."
  };
}

function watchAd(id) {
  const player = createPlayer(id);

  player.energy += 10;

  if (player.energy > 1000) {
    player.energy = 1000;
  }

  return player.energy;
}

module.exports = {
  createPlayer,
  plant,
  watchAd
};
