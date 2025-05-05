import axios from "axios";
import { BASE_URL, API_KEY_PARAM, API_LANGUAGE } from "../config";

export class TVShowAPI {
    static async fetchPopulars(){
        const response = await axios.get(`${BASE_URL}/tv/popular${API_KEY_PARAM}${API_LANGUAGE}`);
        return response.data.results;
    }

    static async fetchRecommendations(tvShowId){
        const response = await axios.get(`${BASE_URL}/tv/${tvShowId}/recommendations${API_KEY_PARAM}${API_LANGUAGE}`);
        return response.data.results;
    }

    static async searchByTitle(title){
        const response = await axios.get(`${BASE_URL}/searsch/tv${API_KEY_PARAM}&query=${title}${API_LANGUAGE}`);
        return response.data.results;
    }
}