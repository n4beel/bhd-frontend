/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// react-router-dom components
import { Link } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import ChangeHistorySharpIcon from "@mui/icons-material/ChangeHistorySharp";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

function ReportCard({ name, position, description, votes }) {
  return (
    <Card sx={{ py: 1, px: 3, display: "flex", flexDirection: "row", alignItems: "center" }}>
      <MKBox
        display="flex"
        flexDirection="column"
        alignItems="center"
        pt={{ xs: 1, lg: 2.5 }}
        pb={2.5}
        pr={4}
        pl={{ xs: 4, lg: 1 }}
        lineHeight={1}
      >
        <IconButton aria-label="vote">
          <ChangeHistorySharpIcon />
        </IconButton>
        {votes}
      </MKBox>

      <MKBox pt={{ xs: 1, lg: 2.5 }} pb={2.5} pr={4} pl={{ xs: 4, lg: 1 }} lineHeight={1}>
        <Link to="reports/1">
          <MKTypography variant="h5">{name}</MKTypography>
        </Link>
        <MKTypography variant="h6" color={position.color} mb={1}>
          {position.label}
        </MKTypography>
        <MKTypography variant="body2" color="text">
          {description}
        </MKTypography>
      </MKBox>
    </Card>
  );
}

// Typechecking props for the ReportCard
ReportCard.propTypes = {
  // image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.shape({
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
    ]),
    label: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
};

export default ReportCard;
