import style from "./Card.module.css";

export default function Card({ item }) {
  return (
    <div style={{ width: "300px", height: "400px", perspective: "1000px" }}>
      <div className={style.cardWrapper}>
        <div className={style.thecard}>
          <div className={style.thefront}>
            <img src={item.poster_url} alt={item.title} />
          </div>

          <div className={style.theback}></div>
        </div>
      </div>
    </div>
  );
}
