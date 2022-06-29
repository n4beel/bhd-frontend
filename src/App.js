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

import { useEffect } from "react";

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Kit 2 React themes
import theme from "assets/theme";
import Presentation from "layouts/pages/presentation";

// Material Kit 2 React routes
import routes from "routes";
import Home from "pages/Home";
import CreateReport from "pages/CreateReport";
import Reports from "pages/Reports";
import ReportDetails from "pages/ReportDetails";

// wagmi integration
import { WagmiConfig, createClient } from "wagmi";
import Initial from "pages/Initial";
import { Toaster } from "react-hot-toast";
import Staking from "pages/Staking";

const client = createClient({
  autoConnect: true,
});

export default function App() {
  const { pathname } = useLocation();

  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
  }, [pathname]);

  const getRoutes = (allRoutes) =>
    allRoutes.map((route, index) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={index} />;
      }

      return null;
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Toaster position="top-right" reverseOrder={false} />
      <WagmiConfig client={client}>
        <Routes>
          {getRoutes(routes)}
          <Route path="/" element={<Home />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/report-details" element={<ReportDetails />} />
          <Route path="/create-report" element={<CreateReport />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/initial" element={<Initial />} />
          <Route path="/staking" element={<Staking />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </WagmiConfig>
    </ThemeProvider>
  );
}
