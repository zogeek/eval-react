const STORAGE_KEY = "favoris";

export function getFavoris() {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) {
    return [];
  }
  else {
    return JSON.parse(data);
  }
}

export function saveFavoris(favorite) {
  const favorites = getFavoris();

  favorites.push(favorite);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
}