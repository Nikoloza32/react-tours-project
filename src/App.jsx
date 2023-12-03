import { useEffect, useState } from "react";
import { Tour } from "./Tour";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [tours, setTours] = useState([]);

  const ToursFetch = async () => {
    const response = await fetch(url);
    try {
      if (!response.ok) {
        setIsLoading(false);
        setIsError(true);
        return;
      }
      const fetchTour = await response.json();
      setTours(fetchTour);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };

  useEffect(() => {
    ToursFetch();
  }, []);

  if (isLoading) {
    return <h1>loading...</h1>;
  }

  if (isError) {
    return <h1>Error...</h1>;
  }

  if (tours.length === 0) {
    return (
      <div className="tours-none">
        <h1 className="tours-title">{tours.length} Tours</h1>
        <div className="no-tours">
          <button className="no-tour" onClick={() => ToursFetch()}>
            Recovery Tours
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <h1 className="tours-title">{tours.length} Tours</h1>
      <div className="tours-wrapper">
        {tours.map((tour) => {
          return (
            <Tour key={tour.id} {...tour} tours={tours} setTours={setTours} />
          );
        })}
      </div>
    </>
  );
};
export default App;
