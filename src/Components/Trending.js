import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import "./Trending.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SearchTrending from "./SearchTrending.js";

function Trending() {
  const apikey = "AIzaSyCZ0o--_KA_BpuL98QeSPlD8zfehZdtV0g";
  const clientkey = "new";
  const lmt = 50;

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [trendingList, setTrendingList] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch(
      "https://tenor.googleapis.com/v2/featured?key=" +
        apikey +
        "&client_key=" +
        clientkey +
        "&limit=" +
        lmt
    )
      .then((data) => data.json())
      .then((data) => setTrendingList(data.results));
  }, []);

  console.log(trendingList);

  const serach = (value) => {
    setInput(value);
  };

  return (
    <>
      {input === "" ? (
        <div>
          <Container>
            <h2 className="title"> Trending Tenor Searches</h2>

            <Carousel responsive={responsive}>
              {trendingList.map((item) => (
                <div className="trending" key={item.id}>
                  <img
                    src={item.media_formats.gif.url}
                    alt={item.id}
                    onClick={() => serach(item.content_description)}
                  />
                  <h4>{item.content_description}</h4>
                </div>
              ))}
            </Carousel>
          </Container>
        </div>
      ) : (
        <SearchTrending searchterm={input} />
      )}
    </>
  );
}

export default Trending;
