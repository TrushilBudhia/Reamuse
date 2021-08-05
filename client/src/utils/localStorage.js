export const getSavedGamesDataIds = () => {
  const savedGameDataIds = localStorage.getItem('saved_gamesData')
    ? JSON.parse(localStorage.getItem('saved_gamesData'))
    : [];

  return savedGameDataIds;
};

export const saveGameDataIds = (gameDataIdArr) => {
  if (gameDataIdArr.length) {
    localStorage.setItem('saved_gamesData', JSON.stringify(gameDataIdArr));
  } else {
    localStorage.removeItem('saved_gamesData');
  }
};

export const removeGameDataId = (gameDataId) => {
  const savedGameDataIds = localStorage.getItem('saved_gamesData')
    ? JSON.parse(localStorage.getItem('saved_gamesData'))
    : null;

  if (!savedGameDataIds) {
    return false;
  }

  const updatedSavedGameDataIds = savedGameDataIds?.filter((savedGameDataId) => savedGameDataId !== gameDataId);
  localStorage.setItem('saved_gamesData', JSON.stringify(updatedSavedGameDataIds));

  return true;
};
