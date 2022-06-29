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
import IconButton from "@mui/material/IconButton";
import ChangeHistorySharpIcon from "@mui/icons-material/ChangeHistorySharp";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import PersonIcon from "@mui/icons-material/Person";
import MKButton from "components/MKButton";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
// import MKBadge from "components/MKBadge";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import { getData, formatAddress, postData } from "utils";
import ReactTimeAgo from "react-time-ago";
import { useEffect, useState } from "react";
import MDEditor from "@uiw/react-md-editor";

import { TextField } from "@mui/material";
import toast from "react-hot-toast";

import { SERVER } from "../../../constants";

function Report({
  votes,
  title,
  status,
  severity,
  proposerAddress,
  proposerId,
  proposerName,
  impact,
  assetType,
  description,
  createdAt,
  id,
  asset,
  issues,
}) {
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  const getComments = async () => {
    const res = await getData(`${SERVER}/comment?report=${id}`);
    if (res.status === 200) {
      setComments([...res.result]);
    }
  };

  useEffect(() => {
    console.log(proposerId, assetType, asset, issues);
    getComments();
  }, []);

  const sendComment = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const body = {
      user: user.id,
      report: id,
      comment: {
        content: commentInput,
      },
    };
    setCommentInput("");
    try {
      const res = await postData(`${SERVER}/comment/createComment`, body);
      if (res.status === 200) {
        toast.success("Comment added successfully");
        setComments([...comments, { ...res.result, name: user.name }]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <MKBox display="flex" alignItems="center">
            <MKBox
              display="flex"
              flexDirection="column"
              alignItems="center"
              pt={{ xs: 1, lg: 2.5 }}
              pb={2.5}
              pr={4}
              pl={{ xs: 4, lg: 1 }}
              mt="-16px"
              lineHeight={1}
            >
              <IconButton aria-label="vote">
                <ChangeHistorySharpIcon />
              </IconButton>
              {votes || 0}
            </MKBox>
            <MKTypography variant="h3">{title}</MKTypography>
          </MKBox>
        </MKBox>
        <Grid container spacing={3} mb={3}>
          <Grid item>
            <MKTypography variant="body2" color="text">
              {`By ${formatAddress(proposerAddress || "0x00000000000000")}`}
            </MKTypography>
          </Grid>
          <Grid item>
            <MKTypography variant="h6" color="info" mb={1}>
              {`${status} | ${severity}`}
            </MKTypography>
          </Grid>
          {/* <Grid item>
            <MKTypography variant="body2" color="text">
              <ReactTimeAgo date={new Date(createdAt)} locale="en-US" />
            </MKTypography>
          </Grid> */}

          {/* <Grid item>
            <MKTypography component="span" variant="body2" fontWeight="bold">
              260&nbsp;
            </MKTypography>
            <MKTypography component="span" variant="body2" color="text">
              Following
            </MKTypography>
          </Grid> */}
        </Grid>
        <Grid>
          <Timeline position="right">
            <TimelineItem>
              <TimelineSeparator>
                {/* <TimelineConnector /> */}
                <TimelineDot color="secondary" variant="outlined">
                  <PersonIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  {proposerName}
                </Typography>
                <Typography variant="body2" component="span">
                  {" "}
                  submitted a report <ReactTimeAgo date={new Date(createdAt)} locale="en-US" />
                </Typography>
                <Typography sx={{ mt: 3 }}>
                  <MDEditor.Markdown source={description} />
                </Typography>
                {impact && (
                  <Typography>
                    <MDEditor.Markdown source={impact} />
                  </Typography>
                )}
              </TimelineContent>
            </TimelineItem>
            {comments.length > 0 &&
              comments.map((comment) => (
                <TimelineItem key={comment.id}>
                  <TimelineSeparator>
                    <TimelineDot color="secondary" variant="outlined">
                      <PersonIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="h6" component="span">
                      {comment.name}
                    </Typography>
                    <Typography variant="body2" component="span">
                      {" "}
                      commented <ReactTimeAgo date={comment.created_at} locale="en-US" />
                    </Typography>
                    <Typography variant="body2">{comment.content}</Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot color="secondary" variant="outlined">
                  <PersonIcon />
                </TimelineDot>
                {/* <TimelineConnector /> */}
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <TextField
                  label="Add a comment"
                  multiline
                  fullWidth
                  rows={4}
                  placeholder="Type a comment here..."
                  value={commentInput}
                  onChange={(e) => setCommentInput(e.target.value)}
                />
                <MKButton
                  component="button"
                  variant="gradient"
                  color="info"
                  size="medium"
                  disabled={!commentInput}
                  onClick={sendComment}
                  style={{
                    marginTop: "16px",
                  }}
                >
                  Comment
                </MKButton>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>
      </Container>
    </MKBox>
  );
}

Report.defaultProps = {
  votes: "",
  title: "",
  status: "",
  severity: "",
  proposerAddress: "",
  proposerId: "",
  proposerName: "",
  impact: "",
  assetType: "",
  description: "",
  createdAt: "",
  id: "",
  asset: "",
  issues: [],
};
// Typechecking props for the Report
Report.propTypes = {
  votes: PropTypes.any,
  title: PropTypes.any,
  status: PropTypes.any,
  severity: PropTypes.any,
  proposerAddress: PropTypes.any,
  proposerId: PropTypes.any,
  proposerName: PropTypes.any,
  impact: PropTypes.any,
  assetType: PropTypes.any,
  description: PropTypes.any,
  createdAt: PropTypes.any,
  id: PropTypes.any,
  asset: PropTypes.any,
  issues: PropTypes.any,
};

export default Report;
