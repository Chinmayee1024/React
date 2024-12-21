import styles from "./Netflix.module.css";
import styled from "styled-components";
export const SeriesCard = ({ currData }) => {
  const { img_url, name, rating, description, genre, cast, watch_url } = currData;
  console.log(currData);

  // const ButtonWatchNow = styled.button({
  //   padding: "1.2rem 2.4rem",
  //   border: "none",
  //   fontSize: "",
  //   backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
  //   color: "var(--btn-color)",
  //   fontWeight: "bold",
  //   cursor: "pointer",
  // });
  const ButtonWatchNow = styled.button`
    padding: 1.2rem 2.4rem;
    border: none;
    font-size: 1.6rem;
    background-color: ${(props) =>
      props.rating >= 8.5 ? "#49eb8f " : "#f7dc6f"};
    color: var(--btn-color);
    font-weight: bold;
    cursor: pointer;
  `; 

  const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;
  const Rating = styled.h3`
    font-size: 1.6rem;
    color: #49eb8f;
    text-transform: capitalize;
  `;
  return (
    <li className={styles.card}>
      <div>
        <img src={img_url} alt={name} width="40%" height="40%" />
      </div>
      <div className="flex flex-col gap-6 px-[1.2rem] py-[3.2rem]">
        <h2>Name: {name}</h2>
        <Rating>
          Rating:{" "}
          <span className={`${styles.rating} ${ratingClass}`}>{rating}</span>
        </Rating>
        <p className="text-3xl font-bold underline text-cyan-500">Summary: {description}</p>
        <p>Genre: {genre.join(",")}</p>
        <p>Cast: {cast.join(",")}</p>
        <a href={watch_url} target="_blank">
          {/* <button style={ButtonWatchNow}>Watch Now</button> */}
          <ButtonWatchNow rating={rating}>Watch Now</ButtonWatchNow>
        </a>
      </div>
    </li>
  );
};
