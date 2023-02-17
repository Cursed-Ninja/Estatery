import {
  Box,
  Button,
  ButtonBase,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  Divider,
} from "@mui/material";
import HouseIcon from "@mui/icons-material/House";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          boxShadow: "0 0 0 0",
          p: 2,
          backgroundColor: "background.paper",
        }}
      >
        <Stack direction="row" gap={10}>
          <Stack direction="row" justifyContent="center" alignItems="center">
            <IconButton color="secondary">
              <HouseIcon />
            </IconButton>
            <Typography variant="h5" fontWeight={600}>
              Estatery
            </Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            gap={5}
          >
            <Button
              variant="contained"
              color="accent"
              sx={{ boxShadow: "0 0 0 0" }}
            >
              <Typography variant="bodyL">Rent</Typography>
            </Button>
            <ButtonBase sx={{ py: 2, px: "6px", borderRadius: 2 }}>
              <Typography variant="bodyL">Buy</Typography>
            </ButtonBase>
            <ButtonBase sx={{ py: 2, px: "6px", borderRadius: 2 }}>
              <Typography variant="bodyL">Sell</Typography>
            </ButtonBase>
            <ButtonBase sx={{ py: 2, px: "6px", borderRadius: 2 }}>
              <Typography variant="bodyL">Manage Property</Typography>
              <KeyboardArrowDownIcon />
            </ButtonBase>
            <ButtonBase sx={{ py: 2, px: "6px", borderRadius: 2 }}>
              <Typography variant="bodyL">Resources</Typography>
              <KeyboardArrowDownIcon />
            </ButtonBase>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          gap={2}
          justifyContent="center"
          alignItems="center"
        >
          <Button variant="outlined" color="secondary">
            <Typography variant="bodyL">Login</Typography>
          </Button>
          <Button variant="contained" color="secondary">
            <Typography variant="bodyL">Sign Up</Typography>
          </Button>
        </Stack>
      </Toolbar>
      <Divider />
    </Box>
  );
};

export default Navbar;
