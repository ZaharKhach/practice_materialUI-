import React from "react";
import { Container } from "@mui/system";
import TourCard from "../TourCard";
import Grid from "@mui/system/Unstable_Grid/Grid";
import cities from "../../data.json";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <div>
      <Container sx={{ marginY: 5 }}>
        {cities.map((city) => (
          <>
            <Typography
              variant="h3"
              component="h1"
              marginTop={5}
              marginBottom={3}
            >
              Top {city.name} tuors
            </Typography>

            <Grid container spacing={5}>
              {city.tours.map((tour) => (
                <TourCard
                  key={tour.id}
                  name={tour.name}
                  image={tour.image}
                  duration={tour.duration}
                  rating={tour.rating}
                  price={tour.price}
                  numberOfReviews={tour.numberOfReviews}
                />
              ))}
            </Grid>
          </>
        ))}
      </Container>
    </div>
  );
};

export default Home;
