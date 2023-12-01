import { Paper, Rating } from "@mui/material";
import Grid from "@mui/system/Unstable_Grid/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AccessTime } from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

const TourCard = ({
  image,
  name,
  duration,
  numberOfReviews,
  rating,
  price,
}) => {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Paper elevation={5}>
          <img
            style={{ width: "100%", height: "5rem" }}
            className="tourCard__image"
            src={image}
            alt=""
          />
          <Box sx={{ pl: "0.5rem" }}>
            <Typography variant="subtitle2" component="h2">
              {name}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: "2px",
              }}
            >
              <AccessTime sx={{ width: 12.5 }} />
              <Typography variant="body2" component="p" ml={0.5}>
                {duration} hours
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: "25px",
              }}
            >
              <Rating
                name="read-only"
                value={rating}
                precision={0.5}
                readOnly
                size="small"
              />
              <Typography variant="body2" component="p" marginLeft={1}>
                {rating}
              </Typography>
              <Typography variant="body2" component="p" marginLeft={2}>
                ({numberOfReviews} reviews)
              </Typography>
            </Box>

            <Box>
              <Typography mt={1} variant="h6" component="h3">
                From C {price}$
              </Typography>
            </Box>
          </Box>
        </Paper>
      </ThemeProvider>
    </Grid>
  );
};

export default TourCard;
