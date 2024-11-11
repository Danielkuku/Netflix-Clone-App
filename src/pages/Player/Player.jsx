import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Player = () => {
  const { id } = useParams();
  // const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGE4NzBjZWY0NDYxMzkzMTFiODYyODAyZDQxMmNiNiIsIm5iZiI6MTczMTA3OTkyNS4xMjk2ODY4LCJzdWIiOiI2NzJlMjk1ZWYwOTI3YWNkZTBkMWMzMzEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.WsIZrKw_oxFXC2kbtfyrDWkj5kME1_APwLMB3M9kw80",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="player">
        <Link to={"/"}>
          <img src={back_arrow_icon} alt="" />
        </Link>
        <iframe
          width="90%"
          height="90%"
          src={`https://www.youtube.com/embed/${apiData.key}`}
          title="trailer"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <div className="player-info">
          <p>{apiData.published_at.slice(0, 10)}</p>
          <p>{apiData.name}</p>
          <p>{apiData.type}</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Player;
