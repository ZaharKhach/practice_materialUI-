import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import ImageCollage from "./ImageCollage";
import Accordian from "./Accordian";
const Tour = () => {
  return (
    <Container maxWidth="md">
      <Typography marginTop={3} variant="h3" component="h1">
        Explore the World in Vegas
      </Typography>

      <Box marginTop={3} sx={{ display: "flex" }}>
        <img
          src="https://i0.wp.com/hegdetravelphotos.com/wp-content/uploads/2021/06/las-vegas-2011-404.jpg?fit=1200%2C800&ssl=1"
          alt=""
          height={325}
        />
        <ImageCollage />
      </Box>

      <Box>
        <Typography variant="h6" component="h2" marginTop={2}>
          About the ticket
        </Typography>

        <Typography variant="body2" marginTop={2}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
          debitis quidem tempora a eos, provident veritatis dolorum autem velit
          exercitationem sint perferendis neque eligendi saepe explicabo nobis
          eveniet eius temporibus. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Perferendis esse doloremque, laboriosam error quasi
          totam a commodi, quis officia repellat necessitatibus vel porro quidem
          quo magnam! Sint iure magnam maxime.
        </Typography>
      </Box>

      <Box sx={{
        height: '50vh'
      }}>
        <Typography variant="h6" component="h2" marginTop={2}>
          Frequently Asked Questions
        </Typography>

        <Box marginTop={2}>
          <Accordian />
        </Box>
      </Box>
    </Container>
  );
};

export default Tour;
