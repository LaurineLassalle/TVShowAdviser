import s from "./style.module.css";
import { Search as SearchIcon } from "react-bootstrap-icons";
export function SearchBar({ onSubmit, value, onChange }) {
  function submit(e) {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      onSubmit(e.target.value);
    }
  }

  return (
    <>
      <SearchIcon size={27} className={s.icon} />
      <input
        value={value}
        onChange={onChange}
        onKeyUp={submit}
        type="text"
        placeholder="Search a tv show you may like"
        className={s.input}
      ></input>
    </>
  );
}
