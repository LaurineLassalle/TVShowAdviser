import s from "./style.module.css";
export function Logo({ image, title, subtitle, alt }) {
  return (
    <>
      <div className={s.container}>
        <img src={image} className={s.img} alt={s.alt} />
        <span className={s.title}>{title}</span>
      </div>
      <span className={s.subtitle}>{subtitle}</span>
    </>
  );
}
