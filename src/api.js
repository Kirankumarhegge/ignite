//BASE API 
const base_url = `https://api.rawg.io/api/`;

const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10 ){
        return `0${month}`
    } else{
        return month;
    }
}


const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10 ){
        return `0${day}`
    } else{
        return day;
    }
}


const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`


//Popular games 
const popular_games = `games?key=${process.env.REACT_APP_GAME_API}&dates=${lastYear},${currentDate}&ordering=-rating&pages_size=10`
const upcoming_games = `games?key=${process.env.REACT_APP_GAME_API}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`
const newGames = `games?key=${process.env.REACT_APP_GAME_API}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`


export const popularGameUrl = () => `${base_url}${popular_games}`
export const upcomingGamesUrl = () => `${base_url}${upcoming_games}`
export const newGamesUrl = () => `${base_url}${newGames}`

//game Detail
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}?key=${process.env.REACT_APP_GAME_API}`;
//
//game Screenshot
export const gameScreenshotURL = (game_id) => `${base_url}games/${game_id}/screenshots?key=${process.env.REACT_APP_GAME_API}`; 
//
//Searched games
export const searchGameURL = (game_name) => `${base_url}games?key=${process.env.REACT_APP_GAME_API}&search=${game_name}&page_size=9`;