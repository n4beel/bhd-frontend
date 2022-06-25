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
import pxToRem from "assets/theme/functions/pxToRem";

// Material Kit 2 React base styles
import colors from "assets/theme/base/colors";

const { info } = colors;

export default {
  styleOverrides: {
    root: {
      // background: "#f00",
      // fill: "#9fc9ff",
      // stroke: "#9fc9ff",
      // strokeWidth: pxToRem(10),
      width: pxToRem(26),
      height: pxToRem(26),
      // borderRadius: "50%",
      // zIndex: 99,
      // transition: "all 200ms linear",
      marginRight: 24,
      "&.Mui-active": {
        color: info.main,
        // fill: secondary.main,
        // stroke: secondary.main,
        // borderColor: secondary.main,
        // boxShadow: boxShadow([0, 0], [0, 2], secondary.main, 1),
      },
      "&.Mui-completed": {
        color: info.main,
        // fill: white.main,
        // stroke: white.main,
        // borderColor: white.main,
        // boxShadow: boxShadow([0, 0], [0, 2], white.main, 1),
      },
    },
  },
};
