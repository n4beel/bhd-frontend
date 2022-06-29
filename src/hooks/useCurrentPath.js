import { matchRoutes, useLocation } from "react-router-dom";

const routes = [
  { path: "/" },
  { path: "/initial" },
  { path: "/reports" },
  { path: "/create-report" },
  { path: "/report-details" },
];

const useCurrentPath = () => {
  const location = useLocation();
  const [{ route }] = matchRoutes(routes, location);

  return route.path;
};

export default useCurrentPath;
