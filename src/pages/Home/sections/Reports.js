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
import { formatAddress } from "utils";
import { useNavigate } from "react-router-dom";

const data = {
  title: "Top Reports",
  description: "Following are some top reports for voting.",
  items: [
    {
      name: "Registered users contact information disclosure on salesforce lightning endpoint https://disposal.gsa.gov",
      tag: "Resolved",
      priority: "High",
      submittedBy: "0xadd48e4a9653ce304e846C58883ccB3809E1B5A7",
      votes: 10,
    },
    {
      name: "Features",
      tag: "Resolved",
      priority: "High",
      submittedBy: "0xadd48e4a9653ce304e846C58883ccB3809E1B5A7",
      votes: 14,
    },
    {
      name: "Pricing",
      tag: "Resolved",
      priority: "High",
      submittedBy: "0xadd48e4a9653ce304e846C58883ccB3809E1B5A7",
      votes: 8,
    },
    {
      name: "FAQ",
      tag: "Resolved",
      priority: "High",
      submittedBy: "0xadd48e4a9653ce304e846C58883ccB3809E1B5A7",
      votes: 1,
    },
    {
      name: "Blog Posts",
      tag: "Resolved",
      priority: "High",
      submittedBy: "0xadd48e4a9653ce304e846C58883ccB3809E1B5A7",
      votes: 11,
    },
    {
      name: "Testimonials",
      tag: "Resolved",
      priority: "High",
      submittedBy: "0xadd48e4a9653ce304e846C58883ccB3809E1B5A7",
      votes: 11,
    },
    {
      name: "Teams",
      tag: "Resolved",
      priority: "High",
      submittedBy: "0xadd48e4a9653ce304e846C58883ccB3809E1B5A7",
      votes: 6,
    },
    {
      name: "Stats",
      tag: "Resolved",
      priority: "High",
      submittedBy: "0xadd48e4a9653ce304e846C58883ccB3809E1B5A7",
      votes: 3,
    },
    {
      name: "Call to Actions",
      tag: "Resolved",
      priority: "High",
      submittedBy: "0xadd48e4a9653ce304e846C58883ccB3809E1B5A7",
      votes: 8,
    },
    {
      name: "Applications",
      tag: "Resolved",
      priority: "High",
      submittedBy: "0xadd48e4a9653ce304e846C58883ccB3809E1B5A7",
      votes: 6,
    },
  ],
};

function Reports() {
  const navigate = useNavigate();

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
              {data.items.map(({ image, name, votes, tag, priority, submittedBy }) => (
                <Grid item xs={12} key={name}>
                  <ReportCard
                    image={image}
                    name={name}
                    votes={votes}
                    position={{ color: "info", label: `${tag} | ${priority}` }}
                    description={`By ${formatAddress(submittedBy)}`}
                  />
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
