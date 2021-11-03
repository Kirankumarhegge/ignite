import axios from "axios";
import { popularGameUrl, upcomingGamesUrl, newGamesUrl, searchGameURL } from "../api";


//Action creater

export const loadGames = () => async (dispatch) => {
    //FETCH AXIOS
    const popularData = await axios.get(popularGameUrl())
    const newGamesData = await axios.get(newGamesUrl())
    const upcomingData = await axios.get(upcomingGamesUrl())

    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newGamesData.data.results
        }
    })
};

export const fetchSearch = (game_name) => async(dispatch) =>{
    const searchGames = await axios.get(searchGameURL(game_name))

    dispatch({
        type: "FETCH_SEARCHED",
        payload: {
            searched: searchGames.data.results,
        },
    });
};

