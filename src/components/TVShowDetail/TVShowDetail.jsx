import { FiveStartRating } from "../FiveStarRating/FiveStartRating";
import s from "./style.module.css";

export function TVShowDetail(tvShow) {
  const rating = tvShow.tvShow.vote_average / 2;
  return (
    <div>
      <div>
        <div className={s.title}>{tvShow.tvShow.name}</div>
        <div className={s.rating_container}>
          <FiveStartRating rating={rating} />
          <div className={s.rating}>{rating}/5</div>
        </div>

        <div className={s.overview}>{tvShow.tvShow.overview}</div>
      </div>
    </div>
  );
}
