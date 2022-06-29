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
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Autocomplete from "@mui/material/Autocomplete";
// { createFilterOptions }
import Chip from "@mui/material/Chip";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import MKInput from "components/MKInput";
import MKButton from "components/MKButton";

// Material Kit 2 React examples
import DefaultNavbar from "examples/Navbars/DefaultNavbar";

// CreateReport page sections
// import Profile from "pages/CreateReport/sections/Profile";
// import Posts from "pages/CreateReport/sections/Posts";
// import Contact from "pages/CreateReport/sections/Contact";
import Footer from "pages/CreateReport/sections/Footer";

// Routes
import routes from "routes";

// Images
import bgImage from "assets/images/city-profile.jpg";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";
import toast from "react-hot-toast";
import { postData } from "utils";
import { SERVER } from "../../constants";

const severityStatus = ["none", "low", "medium", "high", "critical"];
// const filter = createFilterOptions();

function CreateReport() {
  const [activeStep, setActiveStep] = useState(0);

  const [asset, setAsset] = useState("");
  const [assetType, setAssetType] = useState("");
  // const [organization, setOrganization] = useState(null);

  const [issues, setIssues] = useState([]);

  const [severity, setSeverity] = useState(0);

  const [title, setTitle] = useState("");
  const [description, setDescription] =
    useState(`> NOTE! Thanks for submitting a report! Please replace *all* the [square] sections below with the pertinent details. Remember, the more detail you provide, the easier it is for us to verify and then potentially issue a bounty, so be sure to take your time filling out the report!

  **Summary:** [add summary of the vulnerability]
  
  **Description:** [add more details about this vulnerability]
  
  **Platform(s) Affected:** [website/mobile app]
  
  ## Browsers Verified In [If Applicable]:
  
    * [add each browser and version number tested in]
    * [add each browser and version number tested in]
  
  ## Steps To Reproduce:
  
  (Add details for how we can reproduce the issue)
  
    1. [add step]
    1. [add step]
    1. [add step]
  
  ## Supporting Material/References:
  
    * List any additional material (e.g. screenshots, logs, etc.)`);
  const [impact, setImpact] = useState("");

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const createReport = async () => {
    if (!asset || !assetType || issues.length <= 0 || !title || !description) {
      toast.error("Incomplete form");
      return;
    }
    const user = JSON.parse(localStorage.getItem("user"));
    const report = {
      asset,
      asset_type: assetType,
      issues,
      severity: severityStatus[severity].toUpperCase(),
      title,
      description,
      impact,
      status: "PENDING",
    };
    try {
      const res = await postData(`${SERVER}/report/createReport`, {
        user: user.id,
        report,
      });
      if (res.status === 200) {
        toast.success("Report created successfully");
      }
    } catch (error) {
      console.log(error);
    }

    // setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "https://www.creative-tim.com/product/material-kit-react",
          label: "free download",
          color: "info",
        }}
        transparent
        light
      />
      <MKBox bgColor="white">
        <MKBox
          minHeight="25rem"
          width="100%"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "grid",
            placeItems: "center",
          }}
        />
        <Card
          sx={{
            p: 2,
            mx: { xs: 2, lg: 3 },
            mt: -8,
            mb: 4,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <Container sx={{ mt: 10 }}>
            <Grid
              container
              item
              justifyContent="center"
              xs={10}
              lg={7}
              mx="auto"
              textAlign="center"
            >
              <MKTypography variant="h3" mb={1}>
                Create Report
              </MKTypography>
            </Grid>
          </Container>
          <Container sx={{ mt: 10 }}>
            {/* <Grid container item xs={12} lg={7} sx={{ mx: "auto" }}> */}
            <Stepper activeStep={activeStep} orientation="vertical">
              {/* Step 1 */}
              <Step>
                <StepLabel>Asset</StepLabel>
                <StepContent>
                  <MKBox width="100%" component="div">
                    <MKBox p={3}>
                      <MKTypography sx={{ mb: 2 }}>
                        Enter the attack surface of this issue.
                      </MKTypography>
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                          <MKInput
                            variant="outlined"
                            label={
                              assetType === "domain"
                                ? "Domain"
                                : assetType === "android" || assetType === "ios"
                                ? "Package"
                                : "Asset"
                            }
                            fullWidth
                            onChange={(e) => setAsset(e.target.value)}
                            defaultValue={asset}
                          />
                        </Grid>
                        <Grid item xs={12} md={6}>
                          <FormControl fullWidth>
                            <InputLabel id="asset-type">Asset Type</InputLabel>
                            <Select
                              labelId="asset-type"
                              id="demo-simple-select"
                              value={assetType}
                              label="Asset Type"
                              onChange={(e) => setAssetType(e.target.value)}
                            >
                              <MenuItem value="domain">Domain</MenuItem>
                              <MenuItem value="android">Android: Play Store</MenuItem>
                              <MenuItem value="ios">iOS: App Store</MenuItem>
                              <MenuItem value="other">Other</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        {/* <Grid item xs={12}>
                          <div style={{ width: "100%", display: "flex" }}>
                            <Autocomplete
                              value={organization}
                              onChange={(event, newValue) => {
                                if (typeof newValue === "string") {
                                  setOrganization({
                                    title: newValue,
                                  });
                                } else if (newValue && newValue.inputValue) {
                                  // Create a new value from the user input
                                  setOrganization({
                                    title: newValue.inputValue,
                                  });
                                } else {
                                  setOrganization(newValue);
                                }
                              }}
                              filterOptions={(options, params) => {
                                const filtered = filter(options, params);

                                const { inputValue } = params;
                                // Suggest the creation of a new value
                                const isExisting = options.some(
                                  (option) => inputValue === option.title
                                );
                                if (inputValue !== "" && !isExisting) {
                                  filtered.push({
                                    inputValue,
                                    title: `Add "${inputValue}"`,
                                  });
                                }

                                return filtered;
                              }}
                              selectOnFocus
                              clearOnBlur
                              handleHomeEndKeys
                              id="organization"
                              options={top100Films}
                              getOptionLabel={(option) => {
                                // Value selected with enter, right from the input
                                if (typeof option === "string") {
                                  return option;
                                }
                                // Add "xxx" option created dynamically
                                if (option.inputValue) {
                                  return option.inputValue;
                                }
                                // Regular option
                                return option.title;
                              }}
                              renderOption={(props, option) => <li {...props}>{option.title}</li>}
                              sx={{ width: 300, flexGrow: 1 }}
                              freeSolo
                              renderInput={(params) => (
                                <MKInput
                                  {...params}
                                  variant="outlined"
                                  label="Organization"
                                  className="autocomplete-input"
                                />
                              )}
                            />
                          </div>
                        </Grid> */}
                      </Grid>
                      <Box sx={{ my: 3 }}>
                        <div>
                          <MKButton disabled onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                            Back
                          </MKButton>
                          <MKButton
                            variant="contained"
                            color="info"
                            onClick={handleNext}
                            sx={{ mt: 1, mr: 1 }}
                          >
                            Continue
                          </MKButton>
                        </div>
                      </Box>
                    </MKBox>
                  </MKBox>
                </StepContent>
              </Step>
              {/* Step 2 */}
              <Step>
                <StepLabel>Weakness</StepLabel>
                <StepContent>
                  <MKBox width="100%" component="div">
                    <MKBox p={3}>
                      <MKTypography sx={{ mb: 2 }}>
                        Enter the type of the potential issue(s) you have discovered.
                      </MKTypography>
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <div
                            style={{
                              flex: 1,
                            }}
                          >
                            <Autocomplete
                              multiple
                              id="tags-filled"
                              options={[]}
                              value={issues}
                              freeSolo
                              onChange={(e, value) => {
                                setIssues(value);
                              }}
                              renderTags={(value, getTagProps) =>
                                value.map((option, index) => (
                                  <Chip
                                    variant="outlined"
                                    label={option}
                                    {...getTagProps({ index })}
                                  />
                                ))
                              }
                              sx={{
                                flexGrow: 1,
                              }}
                              renderInput={(params) => (
                                <MKInput
                                  {...params}
                                  variant="outlined"
                                  label="Issue(s)"
                                  placeholder="Issue(s)"
                                  className="autocomplete-input"
                                />
                              )}
                            />
                          </div>
                        </Grid>
                      </Grid>
                      <Box sx={{ my: 3 }}>
                        <div>
                          <MKButton onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                            Back
                          </MKButton>
                          <MKButton
                            variant="contained"
                            color="info"
                            onClick={handleNext}
                            sx={{ mt: 1, mr: 1 }}
                          >
                            Continue
                          </MKButton>
                        </div>
                      </Box>
                    </MKBox>
                  </MKBox>
                </StepContent>
              </Step>
              {/* Step 3 */}
              <Step>
                <StepLabel>Severity</StepLabel>
                <StepContent>
                  <MKBox width="100%" component="div">
                    <MKBox p={3}>
                      <MKTypography sx={{ mb: 2 }}>
                        Estimate the severity of this issue.
                      </MKTypography>
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                          <ButtonGroup variant="outlined" aria-label="outlined button group">
                            {severityStatus.map((sev, index) => (
                              <MKButton
                                key={sev}
                                color={index === severity ? "info" : null}
                                onClick={() => setSeverity(index)}
                                sx={{ border: index === severity ? "none" : "1px solid" }}
                              >
                                {sev}
                              </MKButton>
                            ))}
                          </ButtonGroup>
                        </Grid>
                      </Grid>
                      <Box sx={{ my: 3 }}>
                        <div>
                          <MKButton onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                            Back
                          </MKButton>
                          <MKButton
                            variant="contained"
                            color="info"
                            onClick={handleNext}
                            sx={{ mt: 1, mr: 1 }}
                          >
                            Continue
                          </MKButton>
                        </div>
                      </Box>
                    </MKBox>
                  </MKBox>
                </StepContent>
              </Step>
              {/* Step 4 */}
              <Step>
                <StepLabel>Proof of Concept</StepLabel>
                <StepContent>
                  <MKBox width="100%" component="div">
                    <MKBox p={3}>
                      <MKTypography sx={{ mb: 2 }}>
                        The proof of concept is the most important part of your report submission.
                        Clear, reproducible steps will help validate this issue as quickly as
                        possible.
                      </MKTypography>
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <MKInput
                            variant="outlined"
                            label="Title"
                            fullWidth
                            helperText="A clear and concise title includes the type of vulnerability and the impacted asset."
                            onChange={(e) => setTitle(e.target.value)}
                            defaultValue={title}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <InputLabel htmlFor="description">Description</InputLabel>
                          <FormHelperText className="md-helper">
                            What is the vulnerability? In clear steps, how do you reproduce it?
                          </FormHelperText>
                          <MDEditor
                            id="description"
                            value={description}
                            height={300}
                            onChange={setDescription}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <InputLabel htmlFor="impact">Impact</InputLabel>
                          <FormHelperText className="md-helper">
                            What security impact could an attacker achieve?
                          </FormHelperText>
                          <MDEditor id="impact" value={impact} height={300} onChange={setImpact} />
                        </Grid>
                      </Grid>
                      <Box sx={{ my: 3 }}>
                        <div>
                          <MKButton onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                            Back
                          </MKButton>
                          <MKButton
                            variant="contained"
                            color="info"
                            onClick={createReport}
                            sx={{ mt: 1, mr: 1 }}
                          >
                            Submit
                          </MKButton>
                        </div>
                      </Box>
                    </MKBox>
                  </MKBox>
                </StepContent>
              </Step>
            </Stepper>
            {/* </Grid> */}
          </Container>
        </Card>
        <Footer />
      </MKBox>
    </>
  );
}

export default CreateReport;

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
// const top100Films = [
//   { title: "The Shawshank Redemption", year: 1994 },
//   { title: "The Godfather", year: 1972 },
//   { title: "The Godfather: Part II", year: 1974 },
//   { title: "The Dark Knight", year: 2008 },
//   { title: "12 Angry Men", year: 1957 },
//   { title: "Schindler's List", year: 1993 },
//   { title: "Pulp Fiction", year: 1994 },
//   {
//     title: "The Lord of the Rings: The Return of the King",
//     year: 2003,
//   },
//   { title: "The Good, the Bad and the Ugly", year: 1966 },
//   { title: "Fight Club", year: 1999 },
//   {
//     title: "The Lord of the Rings: The Fellowship of the Ring",
//     year: 2001,
//   },
//   {
//     title: "Star Wars: Episode V - The Empire Strikes Back",
//     year: 1980,
//   },
//   { title: "Forrest Gump", year: 1994 },
//   { title: "Inception", year: 2010 },
//   {
//     title: "The Lord of the Rings: The Two Towers",
//     year: 2002,
//   },
//   { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
//   { title: "Goodfellas", year: 1990 },
//   { title: "The Matrix", year: 1999 },
//   { title: "Seven Samurai", year: 1954 },
//   {
//     title: "Star Wars: Episode IV - A New Hope",
//     year: 1977,
//   },
//   { title: "City of God", year: 2002 },
//   { title: "Se7en", year: 1995 },
//   { title: "The Silence of the Lambs", year: 1991 },
//   { title: "It's a Wonderful Life", year: 1946 },
//   { title: "Life Is Beautiful", year: 1997 },
//   { title: "The Usual Suspects", year: 1995 },
//   { title: "Léon: The Professional", year: 1994 },
//   { title: "Spirited Away", year: 2001 },
//   { title: "Saving Private Ryan", year: 1998 },
//   { title: "Once Upon a Time in the West", year: 1968 },
//   { title: "American History X", year: 1998 },
//   { title: "Interstellar", year: 2014 },
//   { title: "Casablanca", year: 1942 },
//   { title: "City Lights", year: 1931 },
//   { title: "Psycho", year: 1960 },
//   { title: "The Green Mile", year: 1999 },
//   { title: "The Intouchables", year: 2011 },
//   { title: "Modern Times", year: 1936 },
//   { title: "Raiders of the Lost Ark", year: 1981 },
//   { title: "Rear Window", year: 1954 },
//   { title: "The Pianist", year: 2002 },
//   { title: "The Departed", year: 2006 },
//   { title: "Terminator 2: Judgment Day", year: 1991 },
//   { title: "Back to the Future", year: 1985 },
//   { title: "Whiplash", year: 2014 },
//   { title: "Gladiator", year: 2000 },
//   { title: "Memento", year: 2000 },
//   { title: "The Prestige", year: 2006 },
//   { title: "The Lion King", year: 1994 },
//   { title: "Apocalypse Now", year: 1979 },
//   { title: "Alien", year: 1979 },
//   { title: "Sunset Boulevard", year: 1950 },
//   {
//     title: "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
//     year: 1964,
//   },
//   { title: "The Great Dictator", year: 1940 },
//   { title: "Cinema Paradiso", year: 1988 },
//   { title: "The Lives of Others", year: 2006 },
//   { title: "Grave of the Fireflies", year: 1988 },
//   { title: "Paths of Glory", year: 1957 },
//   { title: "Django Unchained", year: 2012 },
//   { title: "The Shining", year: 1980 },
//   { title: "WALL·E", year: 2008 },
//   { title: "American Beauty", year: 1999 },
//   { title: "The Dark Knight Rises", year: 2012 },
//   { title: "Princess Mononoke", year: 1997 },
//   { title: "Aliens", year: 1986 },
//   { title: "Oldboy", year: 2003 },
//   { title: "Once Upon a Time in America", year: 1984 },
//   { title: "Witness for the Prosecution", year: 1957 },
//   { title: "Das Boot", year: 1981 },
//   { title: "Citizen Kane", year: 1941 },
//   { title: "North by Northwest", year: 1959 },
//   { title: "Vertigo", year: 1958 },
//   {
//     title: "Star Wars: Episode VI - Return of the Jedi",
//     year: 1983,
//   },
//   { title: "Reservoir Dogs", year: 1992 },
//   { title: "Braveheart", year: 1995 },
//   { title: "M", year: 1931 },
//   { title: "Requiem for a Dream", year: 2000 },
//   { title: "Amélie", year: 2001 },
//   { title: "A Clockwork Orange", year: 1971 },
//   { title: "Like Stars on Earth", year: 2007 },
//   { title: "Taxi Driver", year: 1976 },
//   { title: "Lawrence of Arabia", year: 1962 },
//   { title: "Double Indemnity", year: 1944 },
//   {
//     title: "Eternal Sunshine of the Spotless Mind",
//     year: 2004,
//   },
//   { title: "Amadeus", year: 1984 },
//   { title: "To Kill a Mockingbird", year: 1962 },
//   { title: "Toy Story 3", year: 2010 },
//   { title: "Logan", year: 2017 },
//   { title: "Full Metal Jacket", year: 1987 },
//   { title: "Dangal", year: 2016 },
//   { title: "The Sting", year: 1973 },
//   { title: "2001: A Space Odyssey", year: 1968 },
//   { title: "Singin' in the Rain", year: 1952 },
//   { title: "Toy Story", year: 1995 },
//   { title: "Bicycle Thieves", year: 1948 },
//   { title: "The Kid", year: 1921 },
//   { title: "Inglourious Basterds", year: 2009 },
//   { title: "Snatch", year: 2000 },
//   { title: "3 Idiots", year: 2009 },
//   { title: "Monty Python and the Holy Grail", year: 1975 },
// ];
