import { useState, useEffect } from "react";
import { TVShowAPI } from "./api/tv-show";
import "./global.css";
import s from "./style.module.css";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import { Logo } from "./components/Logo/Logo";
import logo from "./assets/images/logo.png";
import { TVShowList } from "./components/TVShowList/TVShowList";
import { SearchBar } from "./components/SearchBar/SearchBar";

export function App() {
  const [currentTVShow, setcurrentTVShow] = useState();
  const [recommendationsList, setRecommendationsList] = useState([]);

  const [searchText, setSearchText] = useState("");

  function handleTVShowClick(tvShow) {
    setcurrentTVShow(tvShow); // met à jour la série sélectionnée
    setSearchText(""); // Réinitialise le champ de recherche
  }

  async function fetchPopulars() {
    try {
      const populars = await TVShowAPI.fetchPopulars();
      if (populars.length > 0) {
        setcurrentTVShow(populars[0]);
      }
    } catch (error) {
      alert(
        "Erreur durant la recherche des séries populaires : " + error.message
      );
    }
  }

  async function fetchRecommendations(tvShowId) {
    try {
      const recommendations = await TVShowAPI.fetchRecommendations(tvShowId);
      if (recommendations.length > 0) {
        setRecommendationsList(recommendations.slice(0, 10));
      }
    } catch (error) {
      alert(
        "Erreur durant la recherche des séries recommandées : " + error.message
      );
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);

  async function searchTVShow(tvShowName) {
    try {
      const searchResponse = await TVShowAPI.searchByTitle(tvShowName);

      if (searchResponse.length > 0) {
        setcurrentTVShow(searchResponse[0]);
      }
    } catch (error) {
      alert("Erreur durant la recherche d'un série : " + error.message);
    }
  }
  return (
    <div>
      <div
        className={s.main_container}
        style={{
          background: currentTVShow
            ? `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
            : "black",
        }}
      >
        <div className={s.header}>
          <div className="row">
            <div className="col-4">
              <Logo
                title="Watowatch"
                subtitle="Find a show you may like"
                image={logo}
              />
            </div>
            <div className="col-sm-12 col-md-4">
              <SearchBar
                onSubmit={searchTVShow}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className={s.tv_show_detail}>
          {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
        </div>
        <div className={s.recommended_shows}>
          {recommendationsList && recommendationsList.length > 0 && (
            <>
              <TVShowList
                // onClickItem={setcurrentTVShow}
                onClickItem={handleTVShowClick}
                tvShowList={recommendationsList}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
