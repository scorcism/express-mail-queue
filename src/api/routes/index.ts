import express from "express";
import rootRoute from "./v1/root";

const router = express.Router();

interface Route {
  path: string;
  routes: express.Router;
}

const appRoutes: Route[] = [
  {
    path: "/v1/root",
    routes: rootRoute,
  },
];

appRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
