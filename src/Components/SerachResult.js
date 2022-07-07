import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function SerachResult(props) {
  const [list, setList] = useState([]);

  const apikey = "AIzaSyCZ0o--_KA_BpuL98QeSPlD8zfehZdtV0g";
  const clientkey = "my_test_app";
  const lmt = 50;

  useEffect(() => {
    fetch(
      "https://tenor.googleapis.com/v2/search?q=" +
        props.serachterm +
        "&key=" +
        apikey +
        "&client_key=" +
        clientkey +
        "&limit=" +
        lmt
    )
      .then((data) => data.json())
      .then((data) => setList(data.results));
  }, [props]);

  return (
    <div className="main">
      <Container>
        <h1>{props.serachterm}</h1>
        <h1>GIFS</h1>

        <ImageList variant="masonry" cols={4} gap={8}>
          {list.map((item) => (
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
    </div>
  );
}

export default SerachResult;
