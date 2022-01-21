import { lazy } from "react";

const HomePage = lazy(() => import("../views/Home"));
const TicketDetails = lazy(() => import("../views/TicketDetails"));
const NotFound = lazy(() => import("../containers/NotFound"));

export const routes = [
  { pathname: "/", component: HomePage, name: "Home-Page" },
  { pathname: ":id", component: TicketDetails, name: "Ticket-Details" },
  { pathname: "*", component: NotFound, name: "Not-Found" },
];
