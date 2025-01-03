import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";

const NetflixSeries = () => {
  return (
    <ul className=" grid grid-three-cols">
      {seriesData.map((currElem) => (
        <SeriesCard key={currElem.id} currData={currElem} />
      ))}
    </ul>
  );
};
export default NetflixSeries;
