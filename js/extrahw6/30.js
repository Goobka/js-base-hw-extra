const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244,
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]

const totalPlayTime = playtimes.reduce((acc, value) => {
  return acc + value;
}, 0);

const averagePlayTime = totalPlayTime / playtimes.length;

//Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх. Дополни код так, чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes.