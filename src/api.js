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

console.log(currentDay);
//Popular games 
const popular_games = `games?key=${process.env.REACT_APP_GAME_API}&dates=${lastYear},${currentDate}&ordering=-rating&pages_size=10`


export const popularGameUrl = () => `${base_url}${popular_games}`
