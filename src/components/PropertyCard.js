import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Stack,
  IconButton,
  Divider,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BedIcon from "@mui/icons-material/Bed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import StraightenIcon from "@mui/icons-material/Straighten";

const PropertyCard = ({ data }) => {
  return (
    <Card variant="outlined" sx={{ borderRadius: 5, border: "none" }}>
      <CardMedia sx={{ height: 250 }} image={data.image} />
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <div>
            <Typography variant="h5" component="span" color="text.accent">
              {"$" + data.price.toLocaleString("en-US")}
            </Typography>
            <Typography variant="body1" component="span" color="text.secondary">
              /month
            </Typography>
          </div>
          <IconButton sx={{ border: "1px solid", borderColor: "accent.main" }}>
            <FavoriteBorderIcon color="secondary" />
          </IconButton>
        </Stack>
        <Typography variant="h4" textAlign="left">
          {data.title}
        </Typography>
        <Typography
          variant="caption"
          color="text.secondary"
          component="div"
          textAlign="left"
        >
          {data.address}
        </Typography>
        <Divider sx={{ my: 3, color: "text.secondary" }} />
        <Stack direction="row" justifyContent="space-evenly">
          <Typography
            variant="subtitle2"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <BedIcon sx={{ mr: 0.5 }} color="secondary" />
            {data.bedRooms} Bed{data.bedRooms > 1 ? "s" : ""}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <BathtubIcon sx={{ mr: 0.5 }} color="secondary" />
            {data.bathRooms} Bathroom{data.bathRooms > 1 ? "s" : ""}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ display: "flex", alignItems: "center" }}
          >
            <StraightenIcon sx={{ mr: 0.5 }} color="secondary" />
            {data.length}x{data.breadth} m<sup>2</sup>
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
