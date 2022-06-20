const BASE_URL = `https://www.themealdb.com/api/json/v1/${process.env.REACT_APP_MEAL_API}/`;
const APP_NAME = process.env.REACT_APP_APP_NAME;

console.log("APP_NAME", APP_NAME);

export { BASE_URL, APP_NAME };
