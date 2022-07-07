import React, { useState, useEffect } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./Featured.css";
import Container from "@mui/material/Container";

function Featured() {
  const apikey = "AIzaSyCZ0o--_KA_BpuL98QeSPlD8zfehZdtV0g";
  const clientkey = "my_test_app";
  const lmt = 50;

  const [featuredList, setFeaturedList] = useState([]);

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
      .then((data) => setFeaturedList(data.results));
  }, []);

  return (
    <>
      <Container fixed>
        <h2 className="headline">Featured GIFs</h2>

        <ImageList variant="masonry" cols={4} gap={8}>
          {featuredList.map((item) => (
            <ImageListItem key={item.id}>
              <img
                src={`${item.media_formats.gif.url}?w=248&fit=crop&auto=format`}
                srcSet={`${item.media_formats.gif.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.id}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </>
  );
}

export default Featured;
