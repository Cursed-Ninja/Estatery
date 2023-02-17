import {
  Paper,
  Grid,
  Typography,
  Button,
  Stack,
  TextField,
  IconButton,
  Menu,
  MenuItem,
  Slider,
  Box,
} from "@mui/material";
import { useState } from "react";
import ArrowDropDownCircleRoundedIcon from "@mui/icons-material/ArrowDropDownCircleRounded";
import { useGlobalContext } from "../context/context";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import moment from "moment";
import RotateLeftIcon from "@mui/icons-material/RotateLeft";

const Filter = () => {
  const [date, setDate] = useState(null);
  const [anchorEl, setAnchorEl] = useState({
    menu1: null,
    menu2: null,
    menu3: null,
  });
  const [priceRange, setPriceRange] = useState([1000, 5000]);
  const [propertyType, setPropertyType] = useState("All");
  const handleClose = (menu) => {
    setAnchorEl({ ...anchorEl, [menu]: null });
  };
  const { setFilter } = useGlobalContext();
  return (
    <Paper
      sx={{
        p: 4,
        borderRadius: 4,
      }}
      elevation="0"
    >
      <Grid container spacing={2}>
        <Grid item xs={2.4} borderRight={"1px solid"} borderColor="accent.main">
          <Typography
            variant="bodyS"
            textAlign="left"
            component="div"
            color="text.secondary"
          >
            Location
          </Typography>
          <Typography variant="bodyXL" component="div" textAlign="left">
            New York, USA
          </Typography>
        </Grid>
        <Grid item xs={2.4} borderRight={"1px solid"} borderColor="accent.main">
          <Typography
            variant="bodyS"
            textAlign="left"
            component="div"
            color="text.secondary"
          >
            When
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="bodyXL" component="div" textAlign="left">
              {date ? moment(date).format("DD MMM YYYY") : "Anytime"}
            </Typography>
            <IconButton
              color="secondary"
              onClick={(e) =>
                setAnchorEl({ ...anchorEl, menu3: e.currentTarget })
              }
              id="basic-button-1"
              aria-controls={
                Boolean(anchorEl.menu3) ? "basic-menu-3" : undefined
              }
              aria-haspopup="true"
              aria-expanded={Boolean(anchorEl.menu3) ? "true" : undefined}
            >
              <CalendarMonthIcon />
            </IconButton>
            <Menu
              id="basic-menu-3"
              anchorEl={anchorEl.menu3}
              open={Boolean(anchorEl.menu3)}
              onClose={() => handleClose("menu3")}
              MenuListProps={{
                "aria-labelledby": "basic-button-3",
              }}
            >
              <Box sx={{ p: 1 }} color="success">
                <div style={{ textAlign: "right" }}>
                  <IconButton color="secondary" onClick={() => setDate(null)}>
                    <RotateLeftIcon />
                  </IconButton>
                </div>
                <StaticDatePicker
                  displayStaticWrapperAs="desktop"
                  value={date}
                  onChange={(newValue) => {
                    setDate(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                  color="secondary"
                />
              </Box>
            </Menu>
          </Stack>
        </Grid>
        <Grid item xs={2.4} borderRight={"1px solid"} borderColor="accent.main">
          <Typography
            variant="bodyS"
            textAlign="left"
            component="div"
            color="text.secondary"
          >
            Price
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="bodyXL" component="div" textAlign="left">
              $ {priceRange[0].toLocaleString("en-US")} - ${" "}
              {priceRange[1].toLocaleString("en-US")}
            </Typography>
            <IconButton
              color="secondary"
              onClick={(e) =>
                setAnchorEl({ ...anchorEl, menu1: e.currentTarget })
              }
              id="basic-button-1"
              aria-controls={
                Boolean(anchorEl.menu1) ? "basic-menu-1" : undefined
              }
              aria-haspopup="true"
              aria-expanded={Boolean(anchorEl.menu1) ? "true" : undefined}
            >
              <ArrowDropDownCircleRoundedIcon />
            </IconButton>
            <Menu
              id="basic-menu-1"
              anchorEl={anchorEl.menu1}
              open={Boolean(anchorEl.menu1)}
              onClose={() => handleClose("menu1")}
              MenuListProps={{
                "aria-labelledby": "basic-button-1",
              }}
            >
              <Box sx={{ width: 250, p: 3, paddingTop: 5 }}>
                <Slider
                  min={1000}
                  max={5000}
                  getAriaLabel={() => "Price Range"}
                  value={priceRange}
                  onChange={(e, value) => setPriceRange(value)}
                  valueLabelDisplay="auto"
                  color="secondary"
                />
              </Box>
            </Menu>
          </Stack>
        </Grid>
        <Grid item xs={2.4} borderRight={"1px solid"} borderColor="accent.main">
          <Typography
            variant="bodyS"
            textAlign="left"
            component="div"
            color="text.secondary"
          >
            Property Type
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="bodyXL" component="div" textAlign="left">
              {propertyType}
            </Typography>
            <IconButton
              color="secondary"
              onClick={(e) =>
                setAnchorEl({ ...anchorEl, menu2: e.currentTarget })
              }
              id="basic-button-2"
              aria-controls={
                Boolean(anchorEl.menu2) ? "basic-menu-2" : undefined
              }
              aria-haspopup="true"
              aria-expanded={Boolean(anchorEl.menu2) ? "true" : undefined}
            >
              <ArrowDropDownCircleRoundedIcon />
            </IconButton>
            <Menu
              id="basic-menu-2"
              anchorEl={anchorEl.menu2}
              open={Boolean(anchorEl.menu2)}
              onClose={() => handleClose("menu2")}
              MenuListProps={{
                "aria-labelledby": "basic-button-2",
              }}
              sx={{ p: 5 }}
            >
              <MenuItem
                onClick={() => {
                  setPropertyType("All");
                  handleClose("menu2");
                }}
              >
                All
              </MenuItem>
              <MenuItem
                onClick={() => {
                  setPropertyType("Apartment");
                  handleClose("menu2");
                }}
              >
                Apartment
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose("menu2");
                  setPropertyType("Villa");
                }}
              >
                Villa
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose("menu2");
                  setPropertyType("House");
                }}
              >
                House
              </MenuItem>
            </Menu>
          </Stack>
        </Grid>
        <Grid
          item
          xs={2.4}
          container
          justifyContent="center"
          alignItems="center"
        >
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => {
              setFilter((prev) => ({
                ...prev,
                Price: priceRange,
                Type: propertyType,
                Date: date,
              }));
            }}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Filter;
