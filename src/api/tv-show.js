import axios from "axios";
import { BASE_URL, API_LANGUAGE } from "../config";

export class TVShowAPI {
    static async fetchPopulars(){
        const response = await axios.get(`${BASE_URL}/tv/popular?api_key=${process.env.REACT_APP_API_KEY_PARAM}${API_LANGUAGE}`);
        return response.data.results;
    }

    static async fetchRecommendations(tvShowId){
        const response = await axios.get(`${BASE_URL}/tv/${tvShowId}/recommendations?api_key=${process.env.REACT_APP_API_KEY_PARAM}${API_LANGUAGE}`);
        return response.data.results;
    }

    static async searchByTitle(title){
        const response = await axios.get(`${BASE_URL}/search/tv?api_key=${process.env.REACT_APP_API_KEY_PARAM}&query=${title}${API_LANGUAGE}`);
        return response.data.results;
    }
}