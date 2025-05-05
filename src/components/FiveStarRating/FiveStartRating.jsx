import s from "./style.module.css";
import { StarFill, Star as StarEmpty, StarHalf } from "react-bootstrap-icons";

export function FiveStartRating({ rating }) {
  //Création du tableau d'étoiles vide (jsx)
  const starlist = [];

  //Stocker dans une variable le nombre d'étoiles pleines
  const startFillCount = Math.floor(rating);

  //Stocker dans une variable si oui ou non il y'a une demi étoile
  const hasStartHalf = rating - startFillCount >= 0.5;

  //Stocker dans une variable le nombre d'étoile vide
  const emptyStarCount = 5 - startFillCount - (hasStartHalf ? 1 : 0);

  //Pusher dans le tableau les étoiles pleines
  for (let i = 1; i <= startFillCount; i++) {
    starlist.push(<StarFill key={"star-fill" + i} />);
  }
  //Pusher dan le tableau les demi étoiles (s'il y'en a)
  if (hasStartHalf) {
    starlist.push(<StarHalf key={"star-Half"} />);
  }
  //Pusher dans le tableau les étoiles vides
  for (let j = 1; j <= emptyStarCount; j++) {
    starlist.push(<StarEmpty key={"star-empty" + j} />);
  }
  return <div>{starlist}</div>;
}
