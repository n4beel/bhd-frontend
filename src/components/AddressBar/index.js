import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { formatAddress } from "utils";
import PropTypes from "prop-types";

const AddressBar = ({ address }) => (
  <Box
    sx={{
      borderRadius: "15px",
      backgroundColor: "rgb(33, 36, 41)",
      justifyContent: "center",
      fontFamily: "'Roboto','Helvetica','Arial','sans-serif'",
      fontWeight: 500,
      fontSize: "0.9375rem",
      lineHeight: 1.75,
      letterSpacing: "0.02857em",
      padding: "7px 21px",
      border: "1px solid rgb(55 57 60)",
      color: "#90caf9",
    }}
  >
    <Typography variant="body1">{formatAddress(address)}</Typography>
  </Box>
);

AddressBar.defaultProps = {
  address: "",
};

AddressBar.propTypes = {
  address: PropTypes.any,
};

export default AddressBar;
