import {
  Grid,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PropertyCard from "./PropertyCard";
import { useGlobalContext } from "../context/context";
import Filters from "./Filters";
import { useState } from "react";
import moment from "moment";

const Main = () => {
  const { realEstates, filter, setFilter } = useGlobalContext();
  const [searchText, setSearchText] = useState("");
  console.log(realEstates);
  return (
    <Grid container sx={{ py: 5, px: 15 }} spacing={3}>
      <Grid item xs={6}>
        <Typography variant="h4" marginLeft={0} textAlign="left">
          Search properties to rent
        </Typography>
      </Grid>
      <Grid item xs={6} position="relative">
        <TextField
          size="small"
          label="Search with SearchBar"
          variant="outlined"
          color="secondary"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
            setFilter({ ...filter, Name: e.target.value });
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setFilter({ ...filter, Name: searchText })}
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            position: "absolute",
            right: 0,
            backgroundColor: "white",
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Filters />
      </Grid>
      {realEstates.map((realEstate) => {
        if (
          filter.Name !== "" &&
          realEstate.title.toLowerCase().indexOf(filter.Name.toLowerCase()) ===
            -1
        )
          return <></>;
        if (
          filter.Price[0] > realEstate.price ||
          filter.Price[1] < realEstate.price
        )
          return <></>;
        if (filter.Type !== "All" && filter.Type !== realEstate.type)
          return <></>;
        if (filter.Date && !moment(filter.Date).isSame(realEstate.date, "day"))
          return <></>;
        return (
          <Grid item xs={12} sm={6} md={4}>
            <PropertyCard data={realEstate} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Main;
