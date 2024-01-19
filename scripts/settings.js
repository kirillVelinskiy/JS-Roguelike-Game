const settings = {
  height: 20, // Высота уровня
  width: 32, // Ширина Уровня
  roomAmountMin: 5, // Min кол-во комнат
  roomAmountMax: 10, // Max кол-во комнат
  roomWidthMin: 3, // Min ширина комнаты
  roomWidthMax: 8, // Max ширина комнаты
  roomHeightMin: 3, // Min высота комнаты
  roomHeightMax: 8, // Max высота комнаты
  tunnelsAmountMin: 3, // Min кол-во туннелей
  tunnelsAmountMax: 5, // Max кол-во туннелей
  playerBaseParameters: { damage: 20, hp: 50, maxhp: 100, weaponrange: 1 }, // Хар-ки персонажа
  objects: [
    ['tileSW', 2], // Кол-во мечей на карте
    ['tileHP', 10], // Кол-во зелья лечения на карте
  ],
  objectParameters: {
    // Прибавка к урону после подбора меча
    tileSW: function (playerParameters) {
      playerParameters.damage += 15;
    },
    // Восстановление хдоровья после подбора зелья лечения
    tileHP: function (playerParameters) {
      playerParameters.hp = playerParameters.maxhp;
    },
  },
  enemies: [['tileE', 10]], // Кол-во врагов
  enemyParameters: {
    // Хар-ки врага
    tileE: {
      damage: 30,
      hp: 200,
      maxhp: 250,
      weaponrange: 1,
      visionrange: 8,
      name: 'tileE',
    },
  },
};

export { settings };
