// import { Fragment } from "react";
// import React from "react";
import "./components/Netflix.module.css";
import NetflixSeries from "./components/NetflixSeries";
export const App = () => {
  return (
    <section className="container">
    <h1 className="card-heading">List Of Best Netflix Series</h1>
      <NetflixSeries />
    </section>
  );
};

//  return (
// <div id="container">
//     <NetflixSeries></NetflixSeries>
//     <NetflixSeries></NetflixSeries>
//     <NetflixSeries></NetflixSeries>
//     <NetflixSeries></NetflixSeries>
//     <NetflixSeries></NetflixSeries>
//     <NetflixSeries></NetflixSeries>
//     <NetflixSeries></NetflixSeries>
//     <NetflixSeries></NetflixSeries>
//     <NetflixSeries></NetflixSeries>
//     <NetflixSeries></NetflixSeries>
//     <NetflixSeries></NetflixSeries>
//     <NetflixSeries></NetflixSeries>
//   </div>
// );
// return [
//   <NetflixSeries key={1} />,
//   <NetflixSeries key={2} />,
//   <NetflixSeries key={3} />,
//   <NetflixSeries key={4} />,
//   <NetflixSeries key={5} />,
//   <NetflixSeries key={6} />,
// ];
// return (
//   <React.Fragment>
//     <NetflixSeries />,
//     <NetflixSeries />,
//     <NetflixSeries />,
//     <NetflixSeries />,
//     <NetflixSeries />,
//     <NetflixSeries />,
//   </React.Fragment>
// );
// return (
//   <Fragment>
//     <NetflixSeries />,
//     <NetflixSeries />,
//     <NetflixSeries />,
//     <NetflixSeries />,
//     <NetflixSeries />,
//     <NetflixSeries />,
//   </Fragment>
// );
