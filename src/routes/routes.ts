import { lazy } from "react";

const HomePage = lazy(() => import("../views/Home"));
const TicketDetails = lazy(() => import("../views/TicketDetails"));

export const routes = [
  { pathname: "/", component: HomePage, name: "Home-Page" },
  { pathname: ":id", component: TicketDetails, name: "Ticket-Details" },
];
