/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useEffect, useState } from "react";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKButton from "components/MKButton";

// Home page components
// import ExampleCard from "pages/Home/components/ExampleCard";
// Material Kit 2 React examples
import ReportCard from "examples/Cards/ReportCard";
import { getData } from "utils";
import { useNavigate } from "react-router-dom";
import { SERVER } from "../../../constants";

const data = {
  title: "Top Reports",
  description: "Following are some top reports for voting.",
};

function Reports() {
  const navigate = useNavigate();
  const [reports, setReports] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await getData(`${SERVER}/report?page=1&limit=10`);
      setReports([...res.result]);
    })();
  }, []);

  return (
    <MKBox component="section" my={6} py={6}>
      <Container sx={{ mt: 6 }}>
        <Grid container sx={{ mb: 10 }} spacing={3} key={data.title}>
          <Grid item xs={12} lg={3}>
            <MKBox position="sticky" top="100px" pb={{ xs: 2, lg: 6 }}>
              <MKTypography variant="h3" fontWeight="bold" mb={1}>
                {data.title}
              </MKTypography>
              <MKTypography variant="body2" fontWeight="regular" color="secondary" mb={1} pr={2}>
                {data.description}
              </MKTypography>
            </MKBox>
          </Grid>
          <Grid item xs={12} lg={9}>
            <Grid container spacing={3}>
              {reports.length > 0 &&
                reports.map((report) => (
                  <Grid item xs={12} key={report.id}>
                    <ReportCard {...report} />
                  </Grid>
                ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={8}
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKButton onClick={() => navigate("reports")} color="info">
            view more
          </MKButton>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Reports;
