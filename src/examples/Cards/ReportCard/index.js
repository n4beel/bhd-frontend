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
import { useNavigate } from "react-router-dom";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import ChangeHistorySharpIcon from "@mui/icons-material/ChangeHistorySharp";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import { formatAddress } from "utils";

function ReportCard({
  votes,
  title,
  status,
  severity,
  proposerAddress,
  proposerId,
  proposerName,
  impact,
  asset_type: assetType,
  description,
  created_at: createdAt,
  id,
  asset,
  issues,
}) {
  const navigate = useNavigate();

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
        {votes || 0}
      </MKBox>

      <MKBox pt={{ xs: 1, lg: 2.5 }} pb={2.5} pr={4} pl={{ xs: 4, lg: 1 }} lineHeight={1}>
        {/* <Link to="report-details"> */}
        <MKTypography
          style={{
            cursor: "pointer",
          }}
          variant="h5"
          onClick={() =>
            navigate("report-details", {
              state: {
                severity,
                impact,
                assetType,
                description,
                createdAt,
                id,
                asset,
                title,
                issues,
                status,
                proposerAddress,
                proposerId,
                proposerName,
                votes,
              },
            })
          }
        >
          {title}
        </MKTypography>
        {/* </Link> */}
        <MKTypography variant="h6" color="info" mb={1}>
          {`${status} | ${severity}`}
        </MKTypography>
        <MKTypography variant="body2" color="text">
          {`By ${formatAddress(proposerAddress || "0x00000000000000")}`}
        </MKTypography>
      </MKBox>
    </Card>
  );
}

ReportCard.defaultProps = {
  votes: "",
  title: "",
  status: "",
  severity: "",
  proposerAddress: "",
  proposerId: "",
  proposerName: "",
  impact: "",
  asset_type: "",
  description: "",
  created_at: "",
  id: "",
  asset: "",
  issues: [],
};
// Typechecking props for the ReportCard
ReportCard.propTypes = {
  votes: PropTypes.any,
  title: PropTypes.any,
  status: PropTypes.any,
  severity: PropTypes.any,
  proposerAddress: PropTypes.any,
  proposerId: PropTypes.any,
  proposerName: PropTypes.any,
  impact: PropTypes.any,
  asset_type: PropTypes.any,
  description: PropTypes.any,
  created_at: PropTypes.any,
  id: PropTypes.any,
  asset: PropTypes.any,
  issues: PropTypes.any,
};

export default ReportCard;
